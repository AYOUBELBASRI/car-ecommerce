import { isPlatformBrowser, NgClass, AsyncPipe } from '@angular/common';
import { Component, HostListener, inject, OnInit } from '@angular/core';
import { PLATFORM_ID } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CartService } from '../cart/cart.service';
import { Observable } from 'rxjs';


@Component({
    selector: 'app-navbar',
    imports: [RouterLink, NgClass, AsyncPipe],
    templateUrl: './navbar.html',
    styleUrl: './navbar.css',
})
export class Navbar implements OnInit {
    isScrolled = false;
    private readonly platformId = inject(PLATFORM_ID);
    private readonly scrolledThreshold = 24;
    cartItemCount: Observable<number> | undefined;

    constructor(private cartService: CartService) {
        this.updateScrolledState();
    }

    ngOnInit(): void {
        this.cartItemCount = this.cartService.getCartItemCount();
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

