import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  imports: [FormsModule],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  name = '';
  email = '';
  message = '';
  errorMessage = '';

  constructor(private router: Router) {}

  sendMessage() {
    this.errorMessage = '';

    if (!this.name || !this.email || !this.message) {
      this.errorMessage = 'Please fill in your name, email, and message before sending.';
      return;
    }

    this.router.navigate(['/contact-seller-success']);
  }
}
