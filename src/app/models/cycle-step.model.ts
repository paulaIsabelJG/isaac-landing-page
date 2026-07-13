export type CycleStepAccent = 'primary' | 'secondary' | 'green' | 'yellow' | 'coral';

export interface CycleStep {
  id: string;
  number: number;
  title: string;
  /** Etiqueta corta para el resumen visual compacto (SystemCycleComponent). */
  shortTitle: string;
  /** Id de la sección detallada a la que enlaza el resumen (sin '#'). */
  anchor: string;
  /** Frase única para el resumen aún más breve de la home (HowItWorksComponent). */
  summary: string;
  description: string;
  details: string[];
  icon: string;
  accent: CycleStepAccent;
}
