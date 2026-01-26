import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-messages',
  standalone: true,
  imports: [CommonModule],
  template: '<p>Admin messages management works!</p>',
  styleUrl: './admin-messages.css'
})
export class AdminMessagesComponent {

}