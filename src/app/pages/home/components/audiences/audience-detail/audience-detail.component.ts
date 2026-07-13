import { ChangeDetectionStrategy, Component, effect, input, signal } from '@angular/core';
import {
  LucideBriefcase,
  LucideBuilding2,
  LucideDynamicIcon,
  LucideHeartHandshake,
  LucideUserRound,
  type LucideIconInput,
} from '@lucide/angular';
import { SafeImageComponent } from '../../../../../shared/components/safe-image/safe-image.component';
import type { Audience } from '../../../../../models/audience.model';

// Mapa local: los iconos llegan como string desde data/audiences.data.ts.
const AUDIENCE_ICONS: Record<string, LucideIconInput> = {
  'user-round': LucideUserRound,
  'heart-handshake': LucideHeartHandshake,
  briefcase: LucideBriefcase,
  'building-2': LucideBuilding2,
};

// Duración de cada mitad de la transición (fade-out y fade-in). 190ms +
// 190ms de CSS quedan dentro del rango de 300-450ms pedido para el ciclo
// completo de cambio de perfil.
const TRANSITION_STEP_MS = 190;

@Component({
  selector: 'app-audience-detail',
  standalone: true,
  imports: [SafeImageComponent, LucideDynamicIcon],
  templateUrl: './audience-detail.component.html',
  styleUrl: './audience-detail.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AudienceDetailComponent {
  readonly audience = input.required<Audience>();

  protected readonly displayedAudience = signal<Audience | null>(null);
  protected readonly isTransitioning = signal(false);

  private previousId: string | null = null;

  constructor() {
    effect(() => {
      const next = this.audience();

      if (this.previousId === null || next.id === this.previousId || this.prefersReducedMotion()) {
        this.previousId = next.id;
        this.displayedAudience.set(next);
        return;
      }

      this.previousId = next.id;
      this.isTransitioning.set(true);

      setTimeout(() => {
        this.displayedAudience.set(next);
        requestAnimationFrame(() => this.isTransitioning.set(false));
      }, TRANSITION_STEP_MS);
    });
  }

  protected iconFor(key: string): LucideIconInput {
    return AUDIENCE_ICONS[key];
  }

  private prefersReducedMotion(): boolean {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }
}
