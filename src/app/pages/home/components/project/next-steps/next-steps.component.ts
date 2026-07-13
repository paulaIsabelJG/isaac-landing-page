import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LucideCalendarClock, LucideTrendingUp } from '@lucide/angular';
import { ScrollRevealDirective } from '../../../../../shared/directives/scroll-reveal.directive';
import { projectNextSteps } from '../../../../../data/project-next-steps.data';

@Component({
  selector: 'app-next-steps',
  standalone: true,
  imports: [ScrollRevealDirective, LucideCalendarClock, LucideTrendingUp],
  templateUrl: './next-steps.component.html',
  styleUrl: './next-steps.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NextStepsComponent {
  protected readonly steps = projectNextSteps;
}
