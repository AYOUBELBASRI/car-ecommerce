import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  companyLinks = ['About Us', 'Careers', 'Press', 'Blog', 'Investor Relations'];
  supportLinks = ['Help Center', 'Terms of Service', 'Privacy Policy', 'Cookie Policy', 'Contact Us'];
  buySellLinks = ['Find a Car', 'Sell My Car', 'Car Valuation', 'Certified Pre-Owned', 'Car Reviews'];
  
  socialIcons = [
    { name: 'facebook', icon: 'fab fa-facebook-f' },
    { name: 'twitter', icon: 'fab fa-twitter' },
    { name: 'instagram', icon: 'fab fa-instagram' },
    { name: 'linkedin', icon: 'fab fa-linkedin-in' }
  ];

  currentYear = new Date().getFullYear();
}

