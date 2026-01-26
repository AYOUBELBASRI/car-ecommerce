import { Injectable, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuard implements CanActivate {
  private readonly platformId = inject(PLATFORM_ID);

  constructor(private router: Router) { }

  canActivate(): boolean {
    if (!isPlatformBrowser(this.platformId)) {
      return false;
    }

    const isAuthenticated = localStorage.getItem('adminAuthenticated') === 'true';

    if (!isAuthenticated) {
      this.router.navigate(['/admin']);
      return false;
    }

    return true;
  }
}