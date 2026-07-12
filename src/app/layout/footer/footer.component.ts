import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { LucideMessageCircle } from '@lucide/angular';
import { ScrollService } from '../../core/services/scroll.service';
import { navLinks } from '../../data/nav-links.data';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, LucideMessageCircle],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  private readonly router = inject(Router);
  private readonly scrollService = inject(ScrollService);

  protected readonly links = navLinks.filter((link) => !link.isCta);
  protected readonly year = new Date().getFullYear();

  /** Los enlaces con target absoluto ('/como-funciona') son páginas reales. */
  protected isRoute(target: string): boolean {
    return target.startsWith('/');
  }

  protected onNavClick(event: MouseEvent, target: string): void {
    if (this.isRoute(target)) {
      return;
    }

    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
      return;
    }
    event.preventDefault();

    const id = target.replace(/^#/, '');
    this.router.navigate(['/'], { fragment: id }).then(() => {
      setTimeout(() => this.scrollService.scrollToSection(id), 0);
    });
  }
}
