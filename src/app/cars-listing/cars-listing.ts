import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DecimalPipe } from '@angular/common';

interface Car {
  year: number;
  make: string;
  model: string;
  price: number;
  mileage: string;
  fuel: string;
  drive: string;
  image: string;
}

@Component({
  selector: 'app-cars-listing',
  imports: [RouterLink, DecimalPipe],
  templateUrl: './cars-listing.html',
  styleUrl: './cars-listing.css',
})
export class CarsListing {
  cars: Car[] = [
    { year: 2021, make: 'Tesla', model: 'Model 3', price: 34900, mileage: '32k miles', fuel: 'Electric', drive: 'AWD', image: 'assets/audii.jpg' },
    { year: 2022, make: 'BMW', model: '3 Series', price: 42500, mileage: '15k miles', fuel: 'Gasoline', drive: 'RWD', image: 'assets/bmww.jpg' },
    { year: 2020, make: 'Mercedes', model: 'C-Class', price: 38200, mileage: '28k miles', fuel: 'Hybrid', drive: 'AWD', image: 'assets/merc.jpg' },
    { year: 2023, make: 'Audi', model: 'A5 Sportback', price: 49900, mileage: '5k miles', fuel: 'Gasoline', drive: 'AWD', image: 'assets/jag.jpg' },
    { year: 2021, make: 'Toyota', model: 'Camry', price: 28900, mileage: '25k miles', fuel: 'Hybrid', drive: 'FWD', image: 'assets/audii.jpg' },
    { year: 2022, make: 'Jaguar', model: 'F-Pace', price: 45900, mileage: '18k miles', fuel: 'Gasoline', drive: 'AWD', image: 'assets/jag.jpg' },
    { year: 2020, make: 'Land Rover', model: 'Range Rover', price: 68900, mileage: '30k miles', fuel: 'Gasoline', drive: 'AWD', image: 'assets/bmww.jpg' },
    { year: 2023, make: 'Audi', model: 'Q5', price: 42900, mileage: '8k miles', fuel: 'Gasoline', drive: 'AWD', image: 'assets/merc.jpg' }
  ];

  totalCars = 12403;
}
