import { ChangeDetectionStrategy, Component, computed, effect, input, signal } from '@angular/core';
import { LucideCheck } from '@lucide/angular';
import { SafeImageComponent } from '../../../../../shared/components/safe-image/safe-image.component';
import type { Feature, FeatureImage } from '../../../../../models/feature.model';

export type VisualStage = 'active' | 'leaving' | 'entering';
export type ImageStage = 'active' | 'entering';

// Duración de la mitad "leaving" de la transición de funcionalidad; la
// mitad "entering" se resuelve con CSS al pasar de is-entering a is-active.
// 260ms + 260ms de CSS quedan dentro del rango de 450-650ms pedido para el
// ciclo completo.
const LEAVE_MS = 260;

@Component({
  selector: 'app-feature-visual',
  standalone: true,
  imports: [SafeImageComponent, LucideCheck],
  templateUrl: './feature-visual.component.html',
  styleUrl: './feature-visual.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeatureVisualComponent {
  readonly feature = input.required<Feature>();
  readonly features = input.required<Feature[]>();

  protected readonly displayedFeature = signal<Feature | null>(null);
  protected readonly stage = signal<VisualStage>('active');

  // Galería: qué imagen de `displayedFeature().images` está activa. Vuelve
  // a 0 automáticamente cada vez que cambia la funcionalidad (ver el efecto
  // más abajo), tanto si el cambio se anima como si no.
  protected readonly activeImageIndex = signal(0);
  protected readonly displayedImage = signal<FeatureImage | null>(null);
  protected readonly imageStage = signal<ImageStage>('active');

  protected readonly totalLabel = computed(() => this.pad(this.features().length));
  protected readonly progressLabel = computed(() => {
    const current = this.displayedFeature();
    return current ? `${current.step} / ${this.totalLabel()}` : '';
  });

  private previousId: string | null = null;

  constructor() {
    effect(() => {
      const next = this.feature();

      if (this.previousId === null || next.id === this.previousId || this.prefersReducedMotion()) {
        this.previousId = next.id;
        this.displayedFeature.set(next);
        this.stage.set('active');
        this.resetImage(next);
        return;
      }

      this.previousId = next.id;
      this.stage.set('leaving');

      setTimeout(() => {
        this.displayedFeature.set(next);
        this.resetImage(next);
        this.stage.set('entering');
        // Doble rAF: garantiza que el navegador pinte el estado inicial
        // "entering" (opacidad 0 / escala 0.98) antes de pasar a "active",
        // para que la transición CSS se dispare en vez de saltarse.
        requestAnimationFrame(() => {
          requestAnimationFrame(() => this.stage.set('active'));
        });
      }, LEAVE_MS);
    });
  }

  protected isActiveDot(id: string): boolean {
    return this.feature().id === id;
  }

  protected isActiveImage(index: number): boolean {
    return this.activeImageIndex() === index;
  }

  /**
   * Cambia de vista dentro de la misma funcionalidad (clic en un selector).
   * El cambio de funcionalidad en sí nunca pasa por aquí: lo resuelve
   * `resetImage`, sin la mini-transición, porque el panel completo ya se
   * desvanece con la transición de `stage`.
   */
  protected selectImage(index: number): void {
    const feature = this.displayedFeature();
    if (!feature || index === this.activeImageIndex()) return;

    const nextImage = feature.images[index];
    if (!nextImage) return;

    this.activeImageIndex.set(index);
    this.displayedImage.set(nextImage);

    if (this.prefersReducedMotion()) {
      this.imageStage.set('active');
      return;
    }

    this.imageStage.set('entering');
    requestAnimationFrame(() => {
      requestAnimationFrame(() => this.imageStage.set('active'));
    });
  }

  private resetImage(feature: Feature): void {
    this.activeImageIndex.set(0);
    this.displayedImage.set(feature.images[0] ?? null);
    this.imageStage.set('active');
  }

  private prefersReducedMotion(): boolean {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }

  private pad(value: number): string {
    return value < 10 ? `0${value}` : `${value}`;
  }
}
