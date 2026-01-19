import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-financing',
  imports: [RouterLink],
  templateUrl: './financing.html',
  styleUrl: './financing.css',
})
export class Financing {
  constructor(private router: Router) {}

  goToPreQualification() {
    this.router.navigate(['/financing-result']);
  }
}
