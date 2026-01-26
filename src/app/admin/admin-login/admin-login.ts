import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './admin-login.html',
  styleUrl: './admin-login.css'
})
export class AdminLoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';
  isLoading: boolean = false;

  // Simple hardcoded credentials for demo
  private readonly ADMIN_EMAIL = 'admin@2026';
  private readonly ADMIN_PASSWORD = 'admin123';

  constructor(private router: Router) {}

  onLogin() {
    this.errorMessage = '';
    this.isLoading = true;

    // Simple authentication check
    if (this.email === this.ADMIN_EMAIL && this.password === this.ADMIN_PASSWORD) {
      // Store authentication status (in a real app, use proper auth service)
      localStorage.setItem('adminAuthenticated', 'true');
      this.router.navigate(['/admin-dashboard']);
    } else {
      this.errorMessage = 'Invalid email or password';
    }

    this.isLoading = false;
  }
}