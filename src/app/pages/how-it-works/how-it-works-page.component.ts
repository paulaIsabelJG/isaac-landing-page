import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { ProcessHeroComponent } from './components/process-hero/process-hero.component';
import { SystemCycleComponent } from './components/system-cycle/system-cycle.component';
import { BoardCreationComponent } from './components/board-creation/board-creation.component';
import { PersonalizationComponent } from './components/personalization/personalization.component';
import { CommunicationComponent } from './components/communication/communication.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { AnalysisComponent } from './components/analysis/analysis.component';
import { ObjectivesComponent } from './components/objectives/objectives.component';
import { PracticalExampleComponent } from './components/practical-example/practical-example.component';
import { FinalCtaComponent } from './components/final-cta/final-cta.component';
import { SeoService } from '../../core/services/seo.service';

@Component({
  selector: 'app-how-it-works-page',
  standalone: true,
  imports: [
    ProcessHeroComponent,
    SystemCycleComponent,
    BoardCreationComponent,
    PersonalizationComponent,
    CommunicationComponent,
    RegistrationComponent,
    AnalysisComponent,
    ObjectivesComponent,
    PracticalExampleComponent,
    FinalCtaComponent,
  ],
  templateUrl: './how-it-works-page.component.html',
  styleUrl: './how-it-works-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HowItWorksPageComponent implements OnInit {
  private readonly seo = inject(SeoService);

  ngOnInit(): void {
    this.seo.setTitle('Cómo funciona ISAAC | Comunicación aumentativa inteligente');
    this.seo.setDescription(
      'Descubre el ciclo completo de ISAAC: creación de tableros, personalización, comunicación con pictogramas, registro OBL, análisis y objetivos comunicativos.',
    );
    this.seo.setCanonical(`${window.location.origin}${window.location.pathname}`);
  }
}
