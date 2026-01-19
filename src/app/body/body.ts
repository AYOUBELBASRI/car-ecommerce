import { Component } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

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
  trendingCars: Car[] = [
    { year: 2021, make: 'Audi', model: 'RS 7 Sportback (C8 generation)', price: 34900, mileage: '32k miles', fuel: 'Gasoline', drive: 'AWD', image: 'assets/audii.jpg' },
    { year: 2018, make: 'BMW', model: 'M3 (F80 generation)', price: 42500, mileage: '15k miles', fuel: 'Gasoline', drive: 'RWD', image: 'assets/bmww.jpg' },
    { year: 2020, make: 'Mercedes', model: 'SLR 350 4MATIC+', price: 38200, mileage: '28k miles', fuel: 'Hybrid', drive: 'AWD', image: 'assets/merc.jpg' },
    { year: 2024, make: 'Jaguar', model: 'F-Type Convertible', price: 49900, mileage: '5k miles', fuel: 'Gasoline', drive: 'AWD', image: 'assets/jag.jpg' }
  ];

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
