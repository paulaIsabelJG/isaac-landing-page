import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { HeroComponent } from './components/hero/hero.component';
import { HowItWorksComponent } from './components/how-it-works/how-it-works.component';
import { FeaturesComponent } from './components/features/features.component';
import { AudiencesComponent } from './components/audiences/audiences.component';
import { ProjectComponent } from './components/project/project.component';
import { SeoService } from '../../core/services/seo.service';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [HeroComponent, HowItWorksComponent, FeaturesComponent, AudiencesComponent, ProjectComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent implements OnInit {
  private readonly seo = inject(SeoService);

  ngOnInit(): void {
    this.seo.setTitle('ISAAC | Comunicación aumentativa inteligente y personalizada');
    this.seo.setDescription(
      'ISAAC es un sistema de comunicación aumentativa y alternativa con pictogramas, voz e inteligencia artificial para facilitar una comunicación más autónoma y personalizada.',
    );
    this.seo.setCanonical(`${window.location.origin}${window.location.pathname}`);
  }
}
