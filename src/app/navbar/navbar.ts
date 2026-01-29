import { AsyncPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CartService } from '../cart/cart.service';
import { Observable } from 'rxjs';


@Component({
    selector: 'app-navbar',
    imports: [RouterLink, AsyncPipe],
    templateUrl: './navbar.html',
    styleUrl: './navbar.css',
})
export class Navbar implements OnInit {
    cartItemCount: Observable<number> | undefined;

    constructor(private cartService: CartService) {}

    ngOnInit(): void {
        this.cartItemCount = this.cartService.getCartItemCount();
    }
}

