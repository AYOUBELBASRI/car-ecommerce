import { Component, OnInit } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { PartsService } from '../../parts/parts.service';
import { CartService } from '../../cart/cart.service';
import { Part } from '../../shared/models/part.model';
import { take } from 'rxjs/operators';
import { BackButtonComponent } from '../../shared/components/back-button/back-button';

@Component({
  selector: 'app-part-details',
  standalone: true,
  imports: [CommonModule, BackButtonComponent],
  templateUrl: './part-details.html',
  styleUrl: './part-details.css',
})
export class PartDetailsComponent implements OnInit {
  part: Part | undefined;
  quantity: number = 1;

  constructor(
    private route: ActivatedRoute,
    private partsService: PartsService,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const partId = Number(params.get('id'));
      if (partId) {
        this.partsService.getPartById(partId).pipe(take(1)).subscribe(part => {
          this.part = part;
        });
      }
    });
  }

  addToCart(): void {
    if (this.part) {
      this.cartService.addItem(this.part, this.quantity);
      alert(`${this.quantity} of ${this.part.name} added to cart!`);
    }
  }

  incrementQuantity(): void {
    if (this.part && this.quantity < this.part.stock) {
      this.quantity++;
    }
  }

  decrementQuantity(): void {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }
}
