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
    { year: 2019, make: 'Audi', model: 'RS 7 Sportback (C8 generation)', price: 34900, mileage: '32k miles', fuel: 'Gasoline', drive: 'AWD', image: 'assets/audii.jpg' },
    { year: 2018, make: 'BMW', model: 'M3 (F80 generation)', price: 42500, mileage: '15k miles', fuel: 'Gasoline', drive: 'RWD', image: 'assets/bmww.jpg' },
    { year: 2020, make: 'Mercedes', model: 'SLR 350 4MATIC+', price: 38200, mileage: '28k miles', fuel: 'Hybrid', drive: 'AWD', image: 'assets/merc.jpg' },
    { year: 2024, make: 'Jaguar', model: 'F-Type Convertible', price: 49900, mileage: '5k miles', fuel: 'Gasoline', drive: 'AWD', image: 'assets/jag.jpg' },
    { year: 2023, make: 'Toyota', model: 'Toyota Tacoma (third generation)', price: 28900, mileage: '25k miles', fuel: 'Hybrid', drive: 'FWD', image: 'assets/toyota.jpg' },
    { year: 2022, make: 'Ford Mustang', model: 'GT (S550 generation)', price: 45900, mileage: '18k miles', fuel: 'Gasoline', drive: 'AWD', image: 'assets/mustang.jpg' },
    { year: 2022, make: 'Range Rover', model: 'Sport (L461 generation)', price: 68900, mileage: '30k miles', fuel: 'Gasoline', drive: 'AWD', image: 'assets/new-range.jpg' },
    { year: 2023, make: 'Tesla', model: 'Model S (2016–2021 facelift generation)', price: 42900, mileage: '8k miles', fuel: 'Electric', drive: 'AWD', image: 'assets/tesla1.jpg' },
    { year: 2023, make: 'Dodge', model: '1970 Dodge Challenger R/T', price: 42900, mileage: '8k miles', fuel: 'Electric', drive: 'AWD', image: 'assets/dodge.jpg' }
  ];

  totalCars = 12403;
}
