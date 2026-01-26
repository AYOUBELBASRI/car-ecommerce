import { isPlatformBrowser, NgClass } from '@angular/common';
import { Component, HostListener, inject } from '@angular/core';
import { PLATFORM_ID } from '@angular/core';
import { RouterLink } from '@angular/router';


@Component({
    selector: 'app-navbar',
    imports: [RouterLink, NgClass],
    templateUrl: './navbar.html',
    styleUrl: './navbar.css',
})
export class Navbar {
    isScrolled = false;
    private readonly platformId = inject(PLATFORM_ID);
    private readonly scrolledThreshold = 24;

    constructor() {
        this.updateScrolledState();
    }

    @HostListener('window:scroll')
    onWindowScroll(): void {
        this.updateScrolledState();
    }

    private updateScrolledState(): void {
        if (!isPlatformBrowser(this.platformId)) {
            return;
        }

        this.isScrolled = window.scrollY > this.scrolledThreshold;
    }
}

