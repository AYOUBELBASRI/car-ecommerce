import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BackButtonComponent } from '../shared/components/back-button/back-button';

@Component({
  selector: 'app-sell-car',
  imports: [BackButtonComponent],
  templateUrl: './sell-car.html',
  styleUrl: './sell-car.css',
})
export class SellCar {
  constructor(private router: Router) {}

  getValuation() {
    this.router.navigate(['/financing-result']);
  }
}
