// sidebar.service.ts
import { Injectable, signal, computed } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  // Use Angular signals instead of BehaviorSubject
  private isOpenSignal = signal<boolean>(this.getInitialState());

  // Public read-only signal
  public readonly isOpen = computed(() => this.isOpenSignal());

  constructor() {}

  private getInitialState(): boolean {
    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
      const savedState = localStorage.getItem('sidebarOpen');
      return savedState !== null ? JSON.parse(savedState) : true;
    }
    return true;
  }

  // ─── Mobile drawer state ────────────────────────────
  private isMobileOpenSignal = signal<boolean>(false);
  public readonly isMobileOpen = computed(() => this.isMobileOpenSignal());

  toggleMobile(): void {
    this.isMobileOpenSignal.update(v => !v);
  }

  closeMobile(): void {
    this.isMobileOpenSignal.set(false);
  }
  // ────────────────────────────────────────────────────

  toggle(): void {
    const newState = !this.isOpenSignal();
    this.isOpenSignal.set(newState);
    this.saveState(newState);
  }

  open(): void {
    this.isOpenSignal.set(true);
    this.saveState(true);
  }

  close(): void {
    this.isOpenSignal.set(false);
    this.saveState(false);
  }

  private saveState(state: boolean): void {
    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
      localStorage.setItem('sidebarOpen', JSON.stringify(state));
    }
  }

  get value(): boolean {
    return this.isOpenSignal();
  }
}