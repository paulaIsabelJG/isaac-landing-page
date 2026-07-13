export type FeatureAccent = 'primary' | 'secondary' | 'coral' | 'green' | 'yellow';

export interface FeatureImage {
  src: string;
  alt: string;
  label: string;
  caption?: string;
}

export interface Feature {
  id: string;
  step: string;
  shortTitle: string;
  title: string;
  description: string;
  icon: string;
  accent: FeatureAccent;
  tag?: string;
  capabilities: string[];
  highlight: string;
  images: FeatureImage[];
  detailedCapabilities?: string[];
  longDescription?: string;
  workflow?: string[];
  technicalNote?: string;
  linkLabel?: string;
  linkTarget?: string;
}
