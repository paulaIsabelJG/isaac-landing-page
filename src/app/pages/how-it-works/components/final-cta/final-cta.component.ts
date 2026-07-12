import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { LucideArrowRight } from '@lucide/angular';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { ScrollService } from '../../../../core/services/scroll.service';

@Component({
  selector: 'app-final-cta',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './final-cta.component.html',
  styleUrl: './final-cta.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FinalCtaComponent {
  private readonly router = inject(Router);
  private readonly scrollService = inject(ScrollService);

  protected readonly arrowRightIcon = LucideArrowRight;

  protected goToFeatures(): void {
    this.goToHomeFragment('features');
  }

  protected goToContact(): void {
    this.goToHomeFragment('contacto');
  }

  private goToHomeFragment(id: string): void {
    this.router.navigate(['/'], { fragment: id }).then(() => {
      setTimeout(() => this.scrollService.scrollToSection(id), 0);
    });
  }
}
