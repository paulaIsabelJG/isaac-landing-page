import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
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
import { ButtonComponent } from '../../../../../shared/components/button/button.component';
import { SafeImageComponent } from '../../../../../shared/components/safe-image/safe-image.component';
import { ScrollRevealDirective } from '../../../../../shared/directives/scroll-reveal.directive';
import type { Feature } from '../../../../../models/feature.model';

// Mismo mapa de iconos que el resto de componentes de "Funcionalidades":
// cada consumidor del string `icon` resuelve su propio mapa local.
const FEATURE_ICONS: Record<string, LucideIconInput> = {
  'layout-grid': LucideLayoutGrid,
  'user-round-cog': LucideUserRoundCog,
  'brain-circuit': LucideBrainCircuit,
  'audio-lines': LucideAudioLines,
  'chart-no-axes-combined': LucideChartNoAxesCombined,
  'share-2': LucideShare2,
};

@Component({
  selector: 'app-feature-scene',
  standalone: true,
  imports: [ButtonComponent, SafeImageComponent, ScrollRevealDirective, LucideDynamicIcon, LucideCheck],
  templateUrl: './feature-scene.component.html',
  styleUrl: './feature-scene.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeatureSceneComponent {
  readonly feature = input.required<Feature>();
  readonly total = input.required<number>();

  protected readonly titleId = computed(() => `feature-scene-title-${this.feature().id}`);
  protected readonly progressLabel = computed(() => `${this.feature().step} / ${this.pad(this.total())}`);
  protected readonly icon = computed(() => FEATURE_ICONS[this.feature().icon]);

  private pad(value: number): string {
    return value < 10 ? `0${value}` : `${value}`;
  }
}
