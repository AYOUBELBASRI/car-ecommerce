import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-admin-settings',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './admin-settings.html',
  styleUrl: './admin-settings.css',
})
export class AdminSettings {
  siteTitle: string = 'LuxeWheels Admin';
  emailNotifications: boolean = true;
  appTheme: string;

  constructor(private themeService: ThemeService) {
    this.appTheme = this.themeService.getTheme();
  }

  saveSettings() {
    this.themeService.setTheme(this.appTheme as 'light' | 'dark');
    console.log('Settings saved:', {
      siteTitle: this.siteTitle,
      emailNotifications: this.emailNotifications,
      appTheme: this.appTheme
    });
    alert('Settings saved successfully!');
  }
}
