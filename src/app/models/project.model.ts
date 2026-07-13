export interface ProjectOrigin {
  title: string;
  mainText: string;
  extendedText: string;
  technicalText: string;
  highlight: string;
  tags: string[];
  imageSrc: string;
  imageAlt: string;
  secondaryImageSrc: string;
  secondaryImageAlt: string;
  tertiaryImageSrc: string;
  tertiaryImageAlt: string;
}

export interface ProjectCurrentState {
  title: string;
  text: string;
  badgeText: string;
  imageSrc: string;
  imageAlt: string;
  completed: string[];
  next: string[];
}

export interface ScheduledMilestone {
  date: string;
  label: string;
}

export interface ProjectNextSteps {
  title: string;
  scheduled: ScheduledMilestone[];
  evolutionLines: string[];
}
