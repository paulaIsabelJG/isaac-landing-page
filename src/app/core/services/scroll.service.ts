import { Injectable } from '@angular/core';

const HEADER_SELECTOR = 'header';
const SCROLL_MARGIN = 16;

@Injectable({
  providedIn: 'root',
})
export class ScrollService {
  scrollToSection(id: string): void {
    const cleanId = id.replace(/^#/, '');
    const target = document.getElementById(cleanId);
    if (!target) return;

    const top =
      target.getBoundingClientRect().top + window.scrollY - this.getHeaderOffset() - SCROLL_MARGIN;

    this.scrollTo(Math.max(top, 0));
  }

  scrollToTop(): void {
    this.scrollTo(0);
  }

  private scrollTo(top: number): void {
    window.scrollTo({
      top,
      behavior: this.prefersReducedMotion() ? 'auto' : 'smooth',
    });
  }

  private getHeaderOffset(): number {
    const header = document.querySelector<HTMLElement>(HEADER_SELECTOR);
    return header?.getBoundingClientRect().height ?? 0;
  }

  private prefersReducedMotion(): boolean {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }
}
