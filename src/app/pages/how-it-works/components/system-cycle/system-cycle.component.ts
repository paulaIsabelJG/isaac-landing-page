import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  LucideChartPie,
  LucideClipboardList,
  LucideDynamicIcon,
  LucideFilePlus2,
  LucideMessageCircle,
  LucideRepeat2,
  LucideSlidersHorizontal,
  LucideTarget,
  type LucideIconInput,
} from '@lucide/angular';
import { SectionTitleComponent } from '../../../../shared/components/section-title/section-title.component';
import { ScrollRevealDirective } from '../../../../shared/directives/scroll-reveal.directive';
import { cycleSteps } from '../../../../data/cycle-steps.data';

// Mapa local: los pasos llegan como string desde data/cycle-steps.data.ts,
// aquí se resuelven a los iconos concretos que este componente necesita.
const CYCLE_ICONS: Record<string, LucideIconInput> = {
  'file-plus-2': LucideFilePlus2,
  'sliders-horizontal': LucideSlidersHorizontal,
  'message-circle': LucideMessageCircle,
  'clipboard-list': LucideClipboardList,
  'chart-pie': LucideChartPie,
  target: LucideTarget,
};

@Component({
  selector: 'app-system-cycle',
  standalone: true,
  imports: [SectionTitleComponent, ScrollRevealDirective, LucideDynamicIcon, LucideRepeat2],
  templateUrl: './system-cycle.component.html',
  styleUrl: './system-cycle.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SystemCycleComponent {
  protected readonly steps = cycleSteps;

  protected iconFor(key: string): LucideIconInput {
    return CYCLE_ICONS[key];
  }
}
