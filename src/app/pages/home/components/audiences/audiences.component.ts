import { ChangeDetectionStrategy, Component, DestroyRef, computed, inject, signal } from '@angular/core';
import {
  LucideBriefcase,
  LucideBuilding2,
  LucideCheck,
  LucideChevronDown,
  LucideDynamicIcon,
  LucideHeartHandshake,
  LucideShieldCheck,
  LucideUserRound,
  type LucideIconInput,
} from '@lucide/angular';
import { SectionTitleComponent } from '../../../../shared/components/section-title/section-title.component';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { AudienceDetailComponent } from './audience-detail/audience-detail.component';
import { audiences } from '../../../../data/audiences.data';
import type { Audience } from '../../../../models/audience.model';

// Mapa local: los iconos llegan como string desde data/audiences.data.ts.
const AUDIENCE_ICONS: Record<string, LucideIconInput> = {
  'user-round': LucideUserRound,
  'heart-handshake': LucideHeartHandshake,
  briefcase: LucideBriefcase,
  'building-2': LucideBuilding2,
};

// Por debajo de `md` (768px) el selector se comporta como acordeón; a
// partir de ahí es un selector (cuadrícula 2x2 o fila de 4) + panel fijo.
const MOBILE_QUERY = '(max-width: 767px)';

@Component({
  selector: 'app-audiences',
  standalone: true,
  imports: [
    SectionTitleComponent,
    ButtonComponent,
    LucideDynamicIcon,
    LucideCheck,
    LucideChevronDown,
    LucideShieldCheck,
    AudienceDetailComponent,
  ],
  templateUrl: './audiences.component.html',
  styleUrl: './audiences.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AudiencesComponent {
  protected readonly audiences = audiences;

  private readonly destroyRef = inject(DestroyRef);

  protected readonly activeAudienceIndex = signal(0);
  protected readonly activeAudience = computed<Audience>(() => this.audiences[this.activeAudienceIndex()]);

  protected readonly isMobileLayout = signal(this.matchesMobile());

  constructor() {
    const mediaQuery = window.matchMedia(MOBILE_QUERY);
    const onChange = (event: MediaQueryListEvent): void => this.isMobileLayout.set(event.matches);
    mediaQuery.addEventListener('change', onChange);
    this.destroyRef.onDestroy(() => mediaQuery.removeEventListener('change', onChange));
  }

  protected iconFor(key: string): LucideIconInput {
    return AUDIENCE_ICONS[key];
  }

  protected isActiveIndex(index: number): boolean {
    return this.activeAudienceIndex() === index;
  }

  /**
   * Escritorio/tablet: cambia el perfil mostrado en el panel fijo.
   * Móvil: expande ese perfil como acordeón (exclusivo, solo uno abierto;
   * pulsar el que ya está abierto no lo cierra, igual que en el selector).
   */
  protected selectAudience(index: number): void {
    this.activeAudienceIndex.set(index);
  }

  private matchesMobile(): boolean {
    return window.matchMedia(MOBILE_QUERY).matches;
  }
}
