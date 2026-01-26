import { Component, OnInit } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PartsService } from '../../parts/parts.service';
import { CartService } from '../../cart/cart.service';
import { Part } from '../../shared/models/part.model';

@Component({
  selector: 'app-parts-list',
  standalone: true,
  imports: [CommonModule, RouterLink, DecimalPipe],
  templateUrl: './parts-list.html',
  styleUrl: './parts-list.css',
})
export class PartsListComponent implements OnInit {
  parts: Part[] = [];

  constructor(private partsService: PartsService, private cartService: CartService) { }

  ngOnInit(): void {
    this.partsService.getParts().subscribe(parts => {
      this.parts = parts;
    });
  }

  addToCart(part: Part): void {
    this.cartService.addItem(part);
    alert(`${part.name} added to cart!`);
  }
}