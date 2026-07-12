import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  HostListener,
  computed,
  effect,
  inject,
  signal,
} from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { LucideMenu, LucideMessageCircle, LucideX } from '@lucide/angular';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { ScrollService } from '../../core/services/scroll.service';
import { navLinks } from '../../data/nav-links.data';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, ButtonComponent, LucideMenu, LucideMessageCircle, LucideX],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  private readonly router = inject(Router);
  private readonly scrollService = inject(ScrollService);
  private readonly destroyRef = inject(DestroyRef);

  protected readonly links = navLinks.filter((link) => !link.isCta);
  protected readonly ctaLink = navLinks.find((link) => link.isCta) ?? null;

  protected readonly isScrolled = signal(false);
  protected readonly isMobileMenuOpen = signal(false);
  protected readonly toggleLabel = computed(() =>
    this.isMobileMenuOpen() ? 'Cerrar menú' : 'Abrir menú',
  );

  constructor() {
    const onScroll = (): void => this.isScrolled.set(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    this.destroyRef.onDestroy(() => window.removeEventListener('scroll', onScroll));

    // Bloquea el scroll del body mientras el menú móvil está abierto.
    effect(() => {
      document.body.style.overflow = this.isMobileMenuOpen() ? 'hidden' : '';
    });
    this.destroyRef.onDestroy(() => {
      document.body.style.overflow = '';
    });
  }

  @HostListener('document:keydown.escape')
  protected onEscape(): void {
    if (this.isMobileMenuOpen()) {
      this.closeMobileMenu();
    }
  }

  protected toggleMobileMenu(): void {
    this.isMobileMenuOpen.update((open) => !open);
  }

  protected closeMobileMenu(): void {
    this.isMobileMenuOpen.set(false);
  }

  /** Los enlaces con target absoluto ('/como-funciona') son páginas reales. */
  protected isRoute(target: string): boolean {
    return target.startsWith('/');
  }

  /**
   * Los enlaces de sección usan [routerLink]+[fragment] (href real, robusto
   * entre rutas) y solo interceptamos el click "normal" para hacer un scroll
   * suave con ScrollService; clicks con modificador (nueva pestaña, etc.) se
   * dejan pasar sin tocar. Los enlaces a una página real (isRoute) navegan
   * de forma nativa con RouterLink, sin interceptar nada.
   */
  protected onNavClick(event: MouseEvent, target: string): void {
    this.closeMobileMenu();

    if (this.isRoute(target)) {
      return;
    }

    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
      return;
    }
    event.preventDefault();
    this.navigateToFragment(target);
  }

  protected onCtaClick(): void {
    if (!this.ctaLink) return;
    this.closeMobileMenu();
    this.navigateToFragment(this.ctaLink.target);
  }

  private navigateToFragment(target: string): void {
    const id = target.replace(/^#/, '');
    this.router.navigate(['/'], { fragment: id }).then(() => {
      setTimeout(() => this.scrollService.scrollToSection(id), 0);
    });
  }
}
