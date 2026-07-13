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
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { cycleSteps } from '../../../../data/cycle-steps.data';

// Mismo mapa que SystemCycleComponent (página /como-funciona): los pasos
// llegan como string desde data/cycle-steps.data.ts.
const CYCLE_ICONS: Record<string, LucideIconInput> = {
  'file-plus-2': LucideFilePlus2,
  'sliders-horizontal': LucideSlidersHorizontal,
  'message-circle': LucideMessageCircle,
  'clipboard-list': LucideClipboardList,
  'chart-pie': LucideChartPie,
  target: LucideTarget,
};

@Component({
  selector: 'app-how-it-works',
  standalone: true,
  imports: [SectionTitleComponent, ButtonComponent, LucideDynamicIcon, LucideRepeat2],
  templateUrl: './how-it-works.component.html',
  styleUrl: './how-it-works.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HowItWorksComponent {
  protected readonly steps = cycleSteps;

  protected iconFor(key: string): LucideIconInput {
    return CYCLE_ICONS[key];
  }
}
