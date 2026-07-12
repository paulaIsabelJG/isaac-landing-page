import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { LucideArrowRight, LucideRepeat2 } from '@lucide/angular';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { BadgeComponent } from '../../../../shared/components/badge/badge.component';
import { SafeImageComponent } from '../../../../shared/components/safe-image/safe-image.component';
import { ScrollService } from '../../../../core/services/scroll.service';
import { cycleSteps } from '../../../../data/cycle-steps.data';

@Component({
  selector: 'app-process-hero',
  standalone: true,
  imports: [ButtonComponent, BadgeComponent, SafeImageComponent],
  templateUrl: './process-hero.component.html',
  styleUrl: './process-hero.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProcessHeroComponent {
  private readonly router = inject(Router);
  private readonly scrollService = inject(ScrollService);

  protected readonly arrowRightIcon = LucideArrowRight;
  protected readonly repeatIcon = LucideRepeat2;
  protected readonly steps = cycleSteps;

  protected scrollToCycle(): void {
    this.scrollService.scrollToSection('ciclo-sistema');
  }

  protected goToContact(): void {
    this.router.navigate(['/'], { fragment: 'contacto' }).then(() => {
      setTimeout(() => this.scrollService.scrollToSection('contacto'), 0);
    });
  }
}
