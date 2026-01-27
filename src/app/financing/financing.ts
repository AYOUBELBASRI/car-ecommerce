import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BackButtonComponent } from '../shared/components/back-button/back-button';

@Component({
  selector: 'app-financing',
  imports: [BackButtonComponent],
  templateUrl: './financing.html',
  styleUrl: './financing.css',
})
export class Financing {
  constructor(private router: Router) {}

  goToPreQualification() {
    this.router.navigate(['/financing-result']);
  }
}
