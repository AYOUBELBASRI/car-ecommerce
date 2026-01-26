import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CartItem, Part } from '../shared/models/part.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private readonly CART_KEY = 'app-cart';
  private _cartItems = new BehaviorSubject<CartItem[]>([]);
  public readonly cartItems: Observable<CartItem[]> = this._cartItems.asObservable();
  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
    if (this.isBrowser) {
      this.loadCart();
    }
  }

  private loadCart(): void {
    const cartData = localStorage.getItem(this.CART_KEY);
    if (cartData) {
      this._cartItems.next(JSON.parse(cartData));
    }
  }

  private saveCart(): void {
    if (this.isBrowser) {
      localStorage.setItem(this.CART_KEY, JSON.stringify(this._cartItems.value));
    }
  }

  addItem(part: Part, quantity: number = 1): void {
    const currentItems = this._cartItems.value;
    const existingItem = currentItems.find(item => item.id === part.id);

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      this._cartItems.next([...currentItems, { ...part, quantity }]);
    }
    this.saveCart();
  }

  removeItem(partId: number): void {
    const updatedItems = this._cartItems.value.filter(item => item.id !== partId);
    this._cartItems.next(updatedItems);
    this.saveCart();
  }

  updateQuantity(partId: number, quantity: number): void {
    const currentItems = this._cartItems.value;
    const itemToUpdate = currentItems.find(item => item.id === partId);

    if (itemToUpdate) {
      itemToUpdate.quantity = quantity;
      if (itemToUpdate.quantity <= 0) {
        this.removeItem(partId);
      } else {
        this._cartItems.next([...currentItems]);
        this.saveCart();
      }
    }
  }

  getCartTotal(): Observable<number> {
    return this.cartItems.pipe(
      map(items => items.reduce((total, item) => total + (item.price * item.quantity), 0))
    );
  }

  getCartItemCount(): Observable<number> {
    return this.cartItems.pipe(
      map(items => items.reduce((count, item) => count + item.quantity, 0))
    );
  }

  clearCart(): void {
    this._cartItems.next([]);
    this.saveCart();
  }
}