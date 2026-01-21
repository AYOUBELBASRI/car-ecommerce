import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface ContactForm {
  name: string;
  email: string;
  message: string;
}

@Component({
  selector: 'app-user',
  imports: [FormsModule, CommonModule],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  contactForm: ContactForm = {
    name: '',
    email: '',
    message: ''
  };

  isSubmitting = false;

  constructor(private router: Router) {}

  onSendMessage(): void {
    if (!this.isFormValid()) {
      return;
    }

    this.isSubmitting = true;

    // Simulate API call
    setTimeout(() => {
      console.log('Message sent:', this.contactForm);
      this.isSubmitting = false;
      this.router.navigate(['/contact-success']);
    }, 1000);
  }

  isFormValid(): boolean {
    return (
      this.contactForm.name.trim().length > 0 &&
      this.contactForm.email.trim().length > 0 &&
      this.contactForm.email.includes('@') &&
      this.contactForm.message.trim().length > 0
    );
  }
}
