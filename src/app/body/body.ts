import { Component, ViewChildren, ElementRef, inject, PLATFORM_ID, QueryList } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { DecimalPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

interface Car {
  id: number;
  year: number;
  make: string;
  model: string;
  price: number;
  mileage: string;
  fuel: string;
  drive: string;
  image: string;
}

interface Testimonial {
  name: string;
  role: string;
  text: string;
  rating: number;
  avatar: string;
}

@Component({
  selector: 'app-body',
  imports: [DecimalPipe, RouterLink],
  templateUrl: './body.html',
  styleUrl: './body.css',
})
export class Body {
  @ViewChildren('revealCard') revealCards!: QueryList<ElementRef>;
  private readonly platformId = inject(PLATFORM_ID);

  trendingCars: Car[] = [
    { id: 101, year: 2017, make: 'BMW', model: '3 Series', price: 21900, mileage: '54k miles', fuel: 'Gasoline', drive: 'RWD', image: 'assets/bmww.jpg' },
    { id: 102, year: 2018, make: 'Audi', model: 'A4', price: 23900, mileage: '46k miles', fuel: 'Gasoline', drive: 'AWD', image: 'assets/audii.jpg' },
    { id: 103, year: 2019, make: 'Mercedes', model: 'C-Class', price: 27900, mileage: '38k miles', fuel: 'Gasoline', drive: 'RWD', image: 'assets/merc.jpg' },
    { id: 104, year: 2016, make: 'Toyota', model: 'Camry', price: 17900, mileage: '72k miles', fuel: 'Gasoline', drive: 'FWD', image: 'assets/toyota.jpg' }
  ];

  features = [
    { title: '12-Month Warranty', desc: 'Every car comes with a standard warranty for your peace of mind.', icon: 'shield-check' },
    { title: 'Easy Financing', desc: 'Get pre-qualified in minutes with no impact on your credit score.', icon: 'wallet' },
    { title: '7-Day Return Policy', desc: 'Love it or return it. If you\'re not completely satisfied, bring it back.', icon: 'calendar' }
  ];

  testimonials: Testimonial[] = [
    {
      name: 'Jessica',
      role: 'Verified Buyer',
      text: 'I sold my car in 20 minutes and got a great price. The process was transparent.',
      rating: 5,
      avatar: 'assets/sarah.jpg'
    },
    {
      name: 'Michael Chen',
      role: 'Verified Buyer',
      text: 'Found my dream car at a price I couldn\'t beat anywhere else.',
      rating: 5,
      avatar: 'assets/michael.jpg'
    },
    {
      name: 'Jessica Ford',
      role: 'Verified Seller',
      text: 'Financing was a breeze. I was approved in under an hour.',
      rating: 5,
      avatar: 'assets/jessica.jpg'
    }
  ];

  onFavoriteToggle(car: Car): void {
    console.log(`Toggled favorite for ${car.make} ${car.model}`);
    // Implement actual favorite toggling logic here, e.g., update a service or local storage.
  }

}