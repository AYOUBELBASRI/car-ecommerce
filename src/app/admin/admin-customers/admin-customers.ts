import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-customers',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin-customers.html',
  styleUrl: './admin-customers.css',
})
export class AdminCustomers {
  customers = [
    {
      id: 1,
      name: 'Alice Smith',
      email: 'alice.smith@example.com',
      totalOrders: 5,
      totalSpent: 125000,
      lastActivity: '2 days ago'
    },
    {
      id: 2,
      name: 'Bob Johnson',
      email: 'bob.johnson@example.com',
      totalOrders: 3,
      totalSpent: 89000,
      lastActivity: '1 week ago'
    },
    {
      id: 3,
      name: 'Charlie Brown',
      email: 'charlie.brown@example.com',
      totalOrders: 8,
      totalSpent: 210000,
      lastActivity: '5 hours ago'
    },
    {
      id: 4,
      name: 'Diana Prince',
      email: 'diana.prince@example.com',
      totalOrders: 2,
      totalSpent: 75000,
      lastActivity: '3 weeks ago'
    }
  ];
}