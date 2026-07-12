export type CycleStepAccent = 'primary' | 'secondary' | 'green' | 'yellow' | 'coral';

export interface CycleStep {
  id: string;
  number: number;
  title: string;
  description: string;
  details: string[];
  icon: string;
  accent: CycleStepAccent;
}
