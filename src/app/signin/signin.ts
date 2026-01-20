import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-signin',
  imports: [RouterLink, FormsModule],
  templateUrl: './signin.html',
  styleUrl: './signin.css',
})
export class SignIn {
  email = '';
  password = '';
  errorMessage = '';

  constructor(private router: Router) {}

  onSignIn() {
    this.errorMessage = '';

    if (!this.email || !this.password) {
      this.errorMessage = 'Please fill in both email and password to sign in.';
      return;
    }

    // Fake sign-in success: redirect to success page
    this.router.navigate(['/signin-success']);
  }
}
