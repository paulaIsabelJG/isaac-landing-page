import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import {
  LucideBriefcase,
  LucideBuilding2,
  LucideCheck,
  LucideDynamicIcon,
  LucideHeartHandshake,
  LucideUserRound,
  type LucideIconInput,
} from '@lucide/angular';
import { SectionTitleComponent } from '../../../../shared/components/section-title/section-title.component';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { ScrollRevealDirective } from '../../../../shared/directives/scroll-reveal.directive';
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

@Component({
  selector: 'app-audiences',
  standalone: true,
  imports: [
    SectionTitleComponent,
    ButtonComponent,
    ScrollRevealDirective,
    LucideDynamicIcon,
    LucideCheck,
    AudienceDetailComponent,
  ],
  templateUrl: './audiences.component.html',
  styleUrl: './audiences.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AudiencesComponent {
  protected readonly audiences = audiences;

  private readonly activeId = signal<string>(audiences[0].id);

  protected readonly activeAudience = computed<Audience>(
    () => this.audiences.find((audience) => audience.id === this.activeId()) ?? this.audiences[0],
  );

  protected iconFor(key: string): LucideIconInput {
    return AUDIENCE_ICONS[key];
  }

  protected isActive(id: string): boolean {
    return this.activeId() === id;
  }

  protected selectAudience(id: string): void {
    this.activeId.set(id);
  }
}
