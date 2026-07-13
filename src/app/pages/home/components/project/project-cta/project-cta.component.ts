import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { LucideArrowRight } from '@lucide/angular';
import { ButtonComponent } from '../../../../../shared/components/button/button.component';
import { ScrollService } from '../../../../../core/services/scroll.service';

@Component({
  selector: 'app-project-cta',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './project-cta.component.html',
  styleUrl: './project-cta.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectCtaComponent {
  private readonly router = inject(Router);
  private readonly scrollService = inject(ScrollService);

  protected readonly arrowRightIcon = LucideArrowRight;

  protected goToContact(): void {
    this.router.navigate(['/'], { fragment: 'contacto' }).then(() => {
      setTimeout(() => this.scrollService.scrollToSection('contacto'), 0);
    });
  }
}
