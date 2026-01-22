import { Component } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Car, CarDataService } from '../car-data.service';

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
  trendingCars: Car[];

  constructor(private carData: CarDataService) {
    // Get first 4 cars from used cars as trending cars
    this.trendingCars = this.carData.getUsedCars().slice(0, 4);
  }

  onFavoriteToggle(car: Car): void {
    console.log(`Toggled favorite for ${car.make} ${car.model}`);
    // Implement actual favorite toggling logic here, e.g., update a service or local storage.
  }

  features = [
    { title: '12-Month Warranty', desc: 'Every car comes with a standard warranty for your peace of mind.', icon: 'shield-check' },
    { title: 'Easy Financing', desc: 'Get pre-qualified in minutes with no impact on your credit score.', icon: 'wallet' },
    { title: '7-Day Return Policy', desc: 'Love it or return it. If you’re not completely satisfied, bring it back.', icon: 'calendar' }
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
}
