export type AudienceAccent = 'primary' | 'secondary' | 'coral' | 'success';

export interface Audience {
  id: string;
  title: string;
  shortTitle: string;
  shortDescription: string;
  longDescription: string;
  icon: string;
  accent: AudienceAccent;
  needs: string[];
  capabilities: string[];
  highlight: string;
  imageSrc: string;
  imageAlt: string;
  examples?: string[];
  permissionsNote?: string;
}
