import { ChangeDetectionStrategy, Component, effect, input, signal } from '@angular/core';
import {
  LucideAudioLines,
  LucideBrainCircuit,
  LucideChartNoAxesCombined,
  LucideDynamicIcon,
  LucideLayoutGrid,
  LucideShare2,
  LucideUserRoundCog,
  type LucideIconInput,
} from '@lucide/angular';
import { ButtonComponent } from '../../../../../shared/components/button/button.component';
import { BadgeComponent } from '../../../../../shared/components/badge/badge.component';
import { SafeImageComponent } from '../../../../../shared/components/safe-image/safe-image.component';
import type { Feature } from '../../../../../models/feature.model';

// Mismo mapa de iconos que FeaturesComponent: cada componente que consume
// el string `icon` de los datos resuelve su propio mapa local (sin
// registrar nada de forma global).
const FEATURE_ICONS: Record<string, LucideIconInput> = {
  'layout-grid': LucideLayoutGrid,
  'user-round-cog': LucideUserRoundCog,
  'brain-circuit': LucideBrainCircuit,
  'audio-lines': LucideAudioLines,
  'chart-no-axes-combined': LucideChartNoAxesCombined,
  'share-2': LucideShare2,
};

// Duración de cada mitad de la transición (fade-out y fade-in).
const TRANSITION_STEP_MS = 160;

@Component({
  selector: 'app-feature-detail',
  standalone: true,
  imports: [ButtonComponent, BadgeComponent, SafeImageComponent, LucideDynamicIcon],
  templateUrl: './feature-detail.component.html',
  styleUrl: './feature-detail.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeatureDetailComponent {
  readonly feature = input.required<Feature>();

  protected readonly displayedFeature = signal<Feature | null>(null);
  protected readonly isTransitioning = signal(false);

  private previousId: string | null = null;

  constructor() {
    effect(() => {
      const next = this.feature();

      if (this.previousId === null || next.id === this.previousId || this.prefersReducedMotion()) {
        this.previousId = next.id;
        this.displayedFeature.set(next);
        return;
      }

      this.previousId = next.id;
      this.isTransitioning.set(true);

      setTimeout(() => {
        this.displayedFeature.set(next);
        requestAnimationFrame(() => this.isTransitioning.set(false));
      }, TRANSITION_STEP_MS);
    });
  }

  protected iconFor(key: string): LucideIconInput {
    return FEATURE_ICONS[key];
  }

  private prefersReducedMotion(): boolean {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }
}
