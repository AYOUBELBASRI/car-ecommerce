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
    { name: 'twitter', icon: 'fab fa-twitter', link: 'https://x.com/LuxeWheels1' },
    { name: 'instagram', icon: 'fab fa-instagram', link: 'https://www.instagram.com/luxewheels11' },
    { name: 'linkedin', icon: 'fab fa-linkedin-in', link: 'https://linkedin.com' }
  ];

  currentYear = new Date().getFullYear();
}

