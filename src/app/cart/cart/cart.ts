import { Component, OnInit } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';
import { CartService } from '../../cart/cart.service';
import { CartItem } from '../../shared/models/part.model';
import { Observable } from 'rxjs';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, DecimalPipe, RouterLink],
  templateUrl: './cart.html',
  styleUrl: './cart.css',
})
export class CartComponent implements OnInit {
  cartItems$: Observable<CartItem[]> | undefined;
  cartTotal$: Observable<number> | undefined;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartItems$ = this.cartService.cartItems;
    this.cartTotal$ = this.cartService.getCartTotal();
  }

  updateQuantity(item: CartItem, quantity: number): void {
    this.cartService.updateQuantity(item.id, quantity);
  }

  removeItem(item: CartItem): void {
    this.cartService.removeItem(item.id);
  }

  clearCart(): void {
    this.cartService.clearCart();
  }
}