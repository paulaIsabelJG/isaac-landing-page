import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import {
  LucideAudioLines,
  LucideBrainCircuit,
  LucideChartNoAxesCombined,
  LucideCheck,
  LucideDynamicIcon,
  LucideLayoutGrid,
  LucideShare2,
  LucideUserRoundCog,
  type LucideIconInput,
} from '@lucide/angular';
import { SectionTitleComponent } from '../../../../shared/components/section-title/section-title.component';
import { BadgeComponent } from '../../../../shared/components/badge/badge.component';
import { ScrollRevealDirective } from '../../../../shared/directives/scroll-reveal.directive';
import { FeatureDetailComponent } from './feature-detail/feature-detail.component';
import { features } from '../../../../data/features.data';
import type { Feature } from '../../../../models/feature.model';

// Mapa local: los iconos llegan como string desde data/features.data.ts.
const FEATURE_ICONS: Record<string, LucideIconInput> = {
  'layout-grid': LucideLayoutGrid,
  'user-round-cog': LucideUserRoundCog,
  'brain-circuit': LucideBrainCircuit,
  'audio-lines': LucideAudioLines,
  'chart-no-axes-combined': LucideChartNoAxesCombined,
  'share-2': LucideShare2,
};

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [
    SectionTitleComponent,
    BadgeComponent,
    ScrollRevealDirective,
    LucideDynamicIcon,
    LucideCheck,
    FeatureDetailComponent,
  ],
  templateUrl: './features.component.html',
  styleUrl: './features.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeaturesComponent {
  protected readonly features = features;

  private readonly activeId = signal<string>(features[0].id);

  protected readonly activeFeature = computed<Feature>(
    () => this.features.find((feature) => feature.id === this.activeId()) ?? this.features[0],
  );

  protected iconFor(key: string): LucideIconInput {
    return FEATURE_ICONS[key];
  }

  protected isActive(id: string): boolean {
    return this.activeId() === id;
  }

  protected selectFeature(id: string): void {
    this.activeId.set(id);
  }
}
