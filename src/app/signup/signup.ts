import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-signup',
  imports: [RouterLink],
  templateUrl: './signup.html',
  styleUrl: './signup.css',
})
export class SignUp {
  constructor(private router: Router) {}

  onCreateAccount() {
    // After a successful sign up, redirect to sign-in page
    this.router.navigate(['/signin']);
  }
}
