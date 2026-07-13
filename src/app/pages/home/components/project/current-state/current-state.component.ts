import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LucideCircleCheckBig, LucideCompass } from '@lucide/angular';
import { BadgeComponent } from '../../../../../shared/components/badge/badge.component';
import { SafeImageComponent } from '../../../../../shared/components/safe-image/safe-image.component';
import { ScrollRevealDirective } from '../../../../../shared/directives/scroll-reveal.directive';
import { projectCurrentState } from '../../../../../data/project-current-state.data';

@Component({
  selector: 'app-current-state',
  standalone: true,
  imports: [BadgeComponent, SafeImageComponent, ScrollRevealDirective, LucideCircleCheckBig, LucideCompass],
  templateUrl: './current-state.component.html',
  styleUrl: './current-state.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CurrentStateComponent {
  protected readonly state = projectCurrentState;
}
