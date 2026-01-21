import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  constructor(private router: Router) {}

  onSendMessage(): void {
    // Here you would typically send the message to a backend service
    // For now, we'll just navigate to the success page
    this.router.navigate(['/contact-success']);
  }
}
