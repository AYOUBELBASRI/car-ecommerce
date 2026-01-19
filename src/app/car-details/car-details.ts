import { Component } from '@angular/core';
import { RouterLink, ActivatedRoute } from '@angular/router';
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
  description: string;
}

@Component({
  selector: 'app-car-details',
  imports: [RouterLink, DecimalPipe],
  templateUrl: './car-details.html',
  styleUrl: './car-details.css',
})
export class CarDetails {
  carId: number | null = null;
  car: Car | undefined;

  private cars: Car[] = [
    {
      year: 2019,
      make: 'Audi',
      model: 'RS 7 Sportback (C8 generation)',
      price: 34900,
      mileage: '32k miles',
      fuel: 'Gasoline',
      drive: 'AWD',
      image: 'assets/audii.jpg',
      description:
        'High-performance Audi RS 7 Sportback with powerful engine, premium interior, and advanced technology features.',
    },
    {
      year: 2018,
      make: 'BMW',
      model: 'M3 (F80 generation)',
      price: 42500,
      mileage: '15k miles',
      fuel: 'Gasoline',
      drive: 'RWD',
      image: 'assets/bmww.jpg',
      description:
        'Iconic BMW M3 sports sedan with sharp handling, strong acceleration, and a driver-focused cockpit.',
    },
    {
      year: 2020,
      make: 'Mercedes',
      model: 'SLR 350 4MATIC+',
      price: 38200,
      mileage: '28k miles',
      fuel: 'Hybrid',
      drive: 'AWD',
      image: 'assets/merc.jpg',
      description:
        'Luxury Mercedes with 4MATIC+ all-wheel drive, refined comfort, and modern safety technology.',
    },
    {
      year: 2024,
      make: 'Jaguar',
      model: 'F-Type Convertible',
      price: 49900,
      mileage: '5k miles',
      fuel: 'Gasoline',
      drive: 'AWD',
      image: 'assets/jag.jpg',
      description:
        'Stylish Jaguar F-Type Convertible with thrilling performance and open-top driving experience.',
    },
    {
      year: 2023,
      make: 'Toyota',
      model: 'Toyota Tacoma (third generation)',
      price: 28900,
      mileage: '25k miles',
      fuel: 'Hybrid',
      drive: 'FWD',
      image: 'assets/toyota.jpg',
      description:
        'Reliable Toyota Tacoma pickup with great utility, efficiency, and off-road capability.',
    },
    {
      year: 2022,
      make: 'Ford Mustang',
      model: 'GT (S550 generation)',
      price: 45900,
      mileage: '18k miles',
      fuel: 'Gasoline',
      drive: 'AWD',
      image: 'assets/mustang.jpg',
      description:
        'Powerful Ford Mustang GT with muscular V8 performance and classic American muscle styling.',
    },
    {
      year: 2022,
      make: 'Range Rover',
      model: 'Sport (L461 generation)',
      price: 68900,
      mileage: '30k miles',
      fuel: 'Gasoline',
      drive: 'AWD',
      image: 'assets/new-range.jpg',
      description:
        'Premium Range Rover Sport SUV with impressive off-road capability and luxurious interior.',
    },
    {
      year: 2023,
      make: 'Tesla',
      model: 'Model S (2016–2021 facelift generation)',
      price: 42900,
      mileage: '8k miles',
      fuel: 'Electric',
      drive: 'AWD',
      image: 'assets/tesla1.jpg',
      description:
        'Fully electric Tesla Model S with long range, instant torque, and advanced autopilot features.',
    },
    {
      year: 2023,
      make: 'Dodge',
      model: '1970 Dodge Challenger R/T',
      price: 42900,
      mileage: '8k miles',
      fuel: 'Electric',
      drive: 'AWD',
      image: 'assets/dodge.jpg',
      description:
        'Classic-inspired Dodge Challenger R/T with aggressive styling and strong performance.',
    },
  ];

  constructor(private route: ActivatedRoute) {
    this.route.paramMap.subscribe(params => {
      const idParam = params.get('id');
      this.carId = idParam ? Number(idParam) : null;
      this.car = this.carId ? this.cars[this.carId - 1] : undefined;
    });
  }
}
