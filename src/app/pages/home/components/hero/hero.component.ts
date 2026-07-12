import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { LucideArrowRight, LucideAward, LucideMessageCircle, LucideSparkles } from '@lucide/angular';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { BadgeComponent } from '../../../../shared/components/badge/badge.component';
import { SafeImageComponent } from '../../../../shared/components/safe-image/safe-image.component';
import { ScrollService } from '../../../../core/services/scroll.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [ButtonComponent, BadgeComponent, SafeImageComponent, LucideSparkles, LucideMessageCircle],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroComponent {
  private readonly scrollService = inject(ScrollService);

  protected readonly awardIcon = LucideAward;
  protected readonly arrowRightIcon = LucideArrowRight;

  protected scrollToContact(): void {
    this.scrollService.scrollToSection('contacto');
  }
}
