import { Component } from '@angular/core';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-car-details',
  imports: [RouterLink, DecimalPipe],
  templateUrl: './car-details.html',
  styleUrl: './car-details.css',
})
export class CarDetails {
  carId: string | null = null;
  
  constructor(private route: ActivatedRoute) {
    this.route.paramMap.subscribe(params => {
      this.carId = params.get('id');
    });
  }
  
  // Example car data - in real app, fetch from service
  car = {
    year: 2021,
    make: 'Tesla',
    model: 'Model 3',
    price: 34900,
    mileage: '32k miles',
    fuel: 'Electric',
    drive: 'AWD',
    image: 'assets/audii.jpg',
    description: 'This stunning Tesla Model 3 is in excellent condition with low mileage. Fully electric with autopilot capabilities.'
  };
}
