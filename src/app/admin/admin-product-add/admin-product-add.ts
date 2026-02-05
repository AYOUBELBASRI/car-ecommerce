import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-product-add',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './admin-product-add.html',
  styleUrl: './admin-product-add.css',
})
export class AdminProductAdd {
  private router = inject(Router);

  newCar = {
    make: '',
    model: '',
    year: new Date().getFullYear(),
    price: 0,
    status: 'Available',
    image: ''
  };

  saveCar(): void {
    // Placeholder for save logic (API integration or state update)
    this.router.navigate(['/admin-dashboard/products']);
  }

  cancel(): void {
    this.router.navigate(['/admin-dashboard/products']);
  }
}
