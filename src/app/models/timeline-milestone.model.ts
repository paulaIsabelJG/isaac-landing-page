export type MilestoneStatus = 'completado' | 'proximo' | 'previsto';

export interface TimelineMilestone {
  id: string;
  date: string;
  title: string;
  status: MilestoneStatus;
  description: string;
  details?: string[];
  highlight?: string;
  imageSrc?: string;
  imageAlt?: string;
  /** Icono opcional propio del hito; si no se indica, se usa el del estado. */
  icon?: string;
}
