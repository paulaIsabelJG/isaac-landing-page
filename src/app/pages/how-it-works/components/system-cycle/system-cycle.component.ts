import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
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
import { ScrollService } from '../../../../core/services/scroll.service';
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
  imports: [SectionTitleComponent, LucideDynamicIcon, LucideRepeat2],
  templateUrl: './system-cycle.component.html',
  styleUrl: './system-cycle.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SystemCycleComponent {
  private readonly scrollService = inject(ScrollService);

  protected readonly steps = cycleSteps;

  protected iconFor(key: string): LucideIconInput {
    return CYCLE_ICONS[key];
  }

  /**
   * El resumen es un mapa opcional: el enlace real (href="#anchor") ya
   * funciona sin JavaScript. Aquí solo se mejora con scroll suave y el
   * desplazamiento por la altura del header, sin cambiar de ruta (misma
   * página) y sin interceptar clics con modificador (nueva pestaña, etc.).
   */
  protected onStepClick(event: MouseEvent, anchor: string): void {
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
      return;
    }
    event.preventDefault();
    this.scrollService.scrollToSection(anchor);
  }
}
