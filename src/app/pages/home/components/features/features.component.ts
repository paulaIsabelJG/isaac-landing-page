import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  ElementRef,
  afterNextRender,
  computed,
  inject,
  signal,
  viewChildren,
} from '@angular/core';
import { SectionTitleComponent } from '../../../../shared/components/section-title/section-title.component';
import { FeatureSceneComponent } from './feature-scene/feature-scene.component';
import { FeatureVisualComponent } from './feature-visual/feature-visual.component';
import { features } from '../../../../data/features.data';
import type { Feature } from '../../../../models/feature.model';

// Solo la franja central del viewport activa el cambio de escena: evita
// que la funcionalidad activa cambie de un lado a otro al cruzar los
// bordes superior/inferior mientras el usuario hace scroll.
const CENTER_ROOT_MARGIN = '-42% 0px -42% 0px';

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [SectionTitleComponent, FeatureSceneComponent, FeatureVisualComponent],
  templateUrl: './features.component.html',
  styleUrl: './features.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeaturesComponent {
  protected readonly features = features;
  protected readonly total = features.length;

  private readonly destroyRef = inject(DestroyRef);
  private readonly sceneElements = viewChildren(FeatureSceneComponent, { read: ElementRef<HTMLElement> });

  private readonly activeIndex = signal(0);
  protected readonly activeFeature = computed<Feature>(() => this.features[this.activeIndex()]);

  private observer: IntersectionObserver | null = null;

  constructor() {
    afterNextRender(() => this.setupObserver());
  }

  private setupObserver(): void {
    const elements = this.sceneElements();
    if (elements.length === 0 || typeof IntersectionObserver === 'undefined') {
      return;
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const index = elements.findIndex((el) => el.nativeElement === entry.target);
          if (index !== -1) this.activeIndex.set(index);
        }
      },
      { rootMargin: CENTER_ROOT_MARGIN, threshold: 0 },
    );

    for (const element of elements) {
      this.observer.observe(element.nativeElement);
    }

    this.destroyRef.onDestroy(() => this.observer?.disconnect());
  }
}
