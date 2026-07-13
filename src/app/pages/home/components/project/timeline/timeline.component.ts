import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  LucideCalendarClock,
  LucideCircleCheckBig,
  LucideDynamicIcon,
  LucideHourglass,
  LucidePresentation,
  type LucideIconInput,
} from '@lucide/angular';
import { SafeImageComponent } from '../../../../../shared/components/safe-image/safe-image.component';
import { ScrollRevealDirective } from '../../../../../shared/directives/scroll-reveal.directive';
import { projectTimeline } from '../../../../../data/project-timeline.data';
import type { MilestoneStatus, TimelineMilestone } from '../../../../../models/timeline-milestone.model';

const STATUS_ICONS: Record<MilestoneStatus, LucideIconInput> = {
  completado: LucideCircleCheckBig,
  proximo: LucideCalendarClock,
  previsto: LucideHourglass,
};

// Mapa local para los pocos hitos con un icono propio (más específico que
// el genérico del estado); el resto sigue usando el icono de su estado.
const MILESTONE_ICONS: Record<string, LucideIconInput> = {
  presentation: LucidePresentation,
};

const STATUS_LABELS: Record<MilestoneStatus, string> = {
  completado: 'Completado',
  proximo: 'Próximo hito',
  previsto: 'Previsto',
};

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [SafeImageComponent, ScrollRevealDirective, LucideDynamicIcon],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TimelineComponent {
  protected readonly milestones = projectTimeline;

  /** Icono del marcador en la línea: el propio del hito si lo tiene, si no el de su estado. */
  protected markerIconFor(milestone: TimelineMilestone): LucideIconInput {
    return (milestone.icon && MILESTONE_ICONS[milestone.icon]) || STATUS_ICONS[milestone.status];
  }

  /** Icono de la insignia de estado (junto a "Completado"/"Próximo hito"/"Previsto"): siempre el del estado. */
  protected statusIconFor(status: MilestoneStatus): LucideIconInput {
    return STATUS_ICONS[status];
  }

  protected labelFor(status: MilestoneStatus): string {
    return STATUS_LABELS[status];
  }

  protected isRight(index: number): boolean {
    return index % 2 === 1;
  }
}
