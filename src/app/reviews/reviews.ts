import { Component } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-reviews',
  imports: [RouterLink, DecimalPipe],
  templateUrl: './reviews.html',
  styleUrl: './reviews.css',
})
export class Reviews {
  averageRating = 4.8;
  totalReviews = 1284;

  testimonials = [
    {
      name: 'Jessica H.',
      role: 'Verified Buyer',
      rating: 5,
      text: 'Fast and transparent purchase, delivery in 3 days. I highly recommend this service.',
      avatar: 'assets/sarah.jpg'
    } as const,
    {
      name: 'Michael Chen',
      role: 'Verified Buyer',
      rating: 5,
      text: 'Great selection and competitive prices. My financing was approved in under 40 minutes.',
      avatar: 'assets/michael.jpg'
    } as const,
    {
      name: 'Jessica Ford',
      role: 'Verified Seller',
      rating: 5,
      text: 'Selling was incredibly simple—I received a firm offer the same day. Customer support was very responsive.',
      avatar: 'assets/jessica.jpg'
    } as const,
    {
      name: 'Sarah P.',
      role: 'Verified Buyer',
      rating: 4,
      text: 'Clear inspection with no surprises. Delivery was a bit slower than expected but well communicated.',
      avatar: 'assets/jessica.jpg'
    } as const,
    {
      name: 'James O.',
      role: 'Verified Buyer',
      rating: 5,
      text: 'Smooth and secure digital process. The 12‑month warranty gives a lot of peace of mind.',
      avatar: 'assets/michael.jpg'
    } as const,
    {
      name: 'Emma K.',
      role: 'Verified Seller',
      rating: 5,
      text: 'Honest valuation and fast payment. I would definitely use this platform again.',
      avatar: 'assets/sarah.jpg'
    } as const
  ];
}
