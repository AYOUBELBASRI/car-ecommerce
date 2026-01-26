import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-messages',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin-messages.html',
  styleUrl: './admin-messages.css',
})
export class AdminMessages {
  messages = [
    {
      id: 1,
      sender: 'John Doe',
      email: 'john.doe@example.com',
      subject: 'Inquiry about 2024 Tesla Model S',
      date: '2026-01-25',
      read: false
    },
    {
      id: 2,
      sender: 'Jane Smith',
      email: 'jane.smith@example.com',
      subject: 'Question about financing options',
      date: '2026-01-24',
      read: true
    },
    {
      id: 3,
      sender: 'Peter Jones',
      email: 'peter.jones@example.com',
      subject: 'Offer for 2023 BMW X5',
      date: '2026-01-23',
      read: false
    },
    {
      id: 4,
      sender: 'Sarah Miller',
      email: 'sarah.miller@example.com',
      subject: 'Issue with my recent purchase',
      date: '2026-01-22',
      read: true
    }
  ];

  markAsRead(message: any) {
    message.read = true;
  }

  deleteMessage(messageId: number) {
    this.messages = this.messages.filter(msg => msg.id !== messageId);
  }
}