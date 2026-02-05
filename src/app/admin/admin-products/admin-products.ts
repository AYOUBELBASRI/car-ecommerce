import { Component } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin-products',
  standalone: true,
  imports: [CommonModule, DecimalPipe],
  templateUrl: './admin-products.html',
  styleUrl: './admin-products.css',
})
export class AdminProducts {
  constructor(private router: Router) {}
  cars = [
    {
      id: 1,
      make: 'Tesla',
      model: 'Model S',
      year: 2024,
      price: 79990,
      status: 'Available',
      image: 'assets/teslahero.jpg'
    },
    {
      id: 2,
      make: 'BMW',
      model: 'X5',
      year: 2023,
      price: 65000,
      status: 'Sold',
      image: 'assets/bmww.jpg'
    },
    {
      id: 3,
      make: 'Mercedes-Benz',
      model: 'C-Class',
      year: 2022,
      price: 45000,
      status: 'Available',
      image: 'assets/merc.jpg'
    },
    {
      id: 4,
      make: 'Audi',
      model: 'A4',
      year: 2023,
      price: 48000,
      status: 'Available',
      image: 'assets/audi.png'
    },
    {
      id: 5,
      make: 'Ford',
      model: 'Mustang',
      year: 2022,
      price: 38000,
      status: 'Available',
      image: 'assets/mustang.jpg'
    },
  ];

  addNewCar(): void {
    this.router.navigate(['/cars']);
  }
}

