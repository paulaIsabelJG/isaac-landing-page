export type FeatureAccent = 'primary' | 'secondary' | 'coral' | 'green' | 'yellow';

export interface Feature {
  id: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  icon: string;
  accent: FeatureAccent;
  tag?: string;
  imageSrc: string;
  imageAlt: string;
  secondaryImageSrc?: string;
  secondaryImageAlt?: string;
  bullets: string[];
  workflow?: string[];
  highlight?: string;
  technicalNote?: string;
  linkLabel?: string;
  linkTarget?: string;
}
