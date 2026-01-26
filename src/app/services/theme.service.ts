import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private readonly THEME_KEY = 'app-theme';
  private _theme!: BehaviorSubject<'light' | 'dark'>;
  public readonly theme!: Observable<'light' | 'dark'>;
  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
    this._theme = new BehaviorSubject<'light' | 'dark'>(this.getStoredTheme());
    this.theme = this._theme.asObservable();
    this.applyTheme(this._theme.value);
  }

  setTheme(theme: 'light' | 'dark') {
    if (this.isBrowser) {
      localStorage.setItem(this.THEME_KEY, theme);
    }
    this._theme.next(theme);
    this.applyTheme(theme);
  }

  getTheme(): 'light' | 'dark' {
    return this._theme.value;
  }

  private getStoredTheme(): 'light' | 'dark' {
    if (this.isBrowser) {
      return (localStorage.getItem(this.THEME_KEY) as 'light' | 'dark') || 'light';
    }
    return 'light';
  }

  private applyTheme(theme: 'light' | 'dark') {
    if (this.isBrowser) {
      const htmlElement = document.documentElement;
      if (theme === 'dark') {
        htmlElement.classList.add('dark');
      } else {
        htmlElement.classList.remove('dark');
      }
    }
  }
}