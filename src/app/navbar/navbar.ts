import { AsyncPipe, NgClass, isPlatformBrowser } from '@angular/common';
import { Component, OnInit, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { CartService } from '../cart/cart.service';
import { Observable, filter } from 'rxjs';


@Component({
    selector: 'app-navbar',
    imports: [RouterLink, AsyncPipe, NgClass],
    templateUrl: './navbar.html',
    styleUrl: './navbar.css',
})
export class Navbar implements OnInit {
    cartItemCount: Observable<number> | undefined;
    isScrolled = false;
    isHomeRoute = false;
    private isBrowser: boolean;

    constructor(
        private cartService: CartService,
        private router: Router,
        @Inject(PLATFORM_ID) private platformId: Object
    ) {
        this.isBrowser = isPlatformBrowser(this.platformId);
    }

    ngOnInit(): void {
        this.cartItemCount = this.cartService.getCartItemCount();
        this.updateRouteState(this.router.url);
        this.updateScrollState();

        this.router.events
            .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
            .subscribe((event) => {
                this.updateRouteState(event.urlAfterRedirects);
                this.updateScrollState();
            });
    }

    @HostListener('window:scroll', [])
    onWindowScroll() {
        if (!this.isBrowser) {
            return;
        }

        this.isScrolled = !this.isHomeRoute || window.scrollY > 50;
    }

    get isSolid(): boolean {
        return !this.isHomeRoute || this.isScrolled;
    }

    private updateRouteState(url: string): void {
        this.isHomeRoute = url === '/home' || url.startsWith('/home?') || url.startsWith('/home#');
    }

    private updateScrollState(): void {
        if (!this.isHomeRoute) {
            this.isScrolled = true;
            return;
        }

        if (!this.isBrowser) {
            this.isScrolled = false;
            return;
        }

        this.isScrolled = window.scrollY > 50;
    }
}

