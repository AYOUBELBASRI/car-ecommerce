import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-back-button',
  standalone: true,
  imports: [],
  templateUrl: './back-button.html',
  styleUrl: './back-button.css'
})
export class BackButtonComponent {
  @Input() label: string = 'Back';
  @Input() route?: string; // Optional: specific route to navigate to
  @Input() useHistory: boolean = true; // Use browser history by default

  constructor(private location: Location, private router: Router) {}

  handleBack(): void {
    if (this.route) {
      // Navigate to specific route if provided
      this.router.navigate([this.route]);
    } else if (this.useHistory) {
      // Use browser history
      this.location.back();
    }
  }
}
