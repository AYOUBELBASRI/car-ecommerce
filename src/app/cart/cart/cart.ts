
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Observable } from 'rxjs';
import { CartService } from '../cart.service';
import { CartItem } from '../../shared/models/part.model';

@Component({
    selector: 'app-cart',
    standalone: true,
    imports: [CommonModule, RouterLink],
    templateUrl: './cart.html',
    styleUrls: ['./cart.css'],
})
export class CartComponent {
    cartItems$: Observable<CartItem[]>;
    cartTotal$: Observable<number>;

    constructor(public cart: CartService) {
        this.cartItems$ = cart.cartItems;
        this.cartTotal$ = cart.getCartTotal();
    }

    updateQuantity(item: CartItem, quantity: number): void {
        this.cart.updateQuantity(item.id, quantity);
    }

    removeItem(item: CartItem): void {
        this.cart.removeItem(item.id);
    }

    clearCart(): void {
        this.cart.clearCart();
    }
}
