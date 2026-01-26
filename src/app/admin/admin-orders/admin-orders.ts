import { Component } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-admin-orders',
  standalone: true,
  imports: [CommonModule, DecimalPipe],
  templateUrl: './admin-orders.html',
  styleUrl: './admin-orders.css',
})
export class AdminOrders {
  orders = [
    {
      id: 'ORD001',
      customer: 'Alice Smith',
      car: '2024 Tesla Model S',
      amount: 79990,
      status: 'Completed',
      orderDate: '2026-01-20'
    },
    {
      id: 'ORD002',
      customer: 'Bob Johnson',
      car: '2023 BMW X5',
      amount: 65000,
      status: 'Pending',
      orderDate: '2026-01-22'
    },
    {
      id: 'ORD003',
      customer: 'Charlie Brown',
      car: '2022 Mercedes-Benz C-Class',
      amount: 45000,
      status: 'Completed',
      orderDate: '2026-01-18'
    },
    {
      id: 'ORD004',
      customer: 'Diana Prince',
      car: '2023 Audi A4',
      amount: 48000,
      status: 'Cancelled',
      orderDate: '2026-01-19'
    }
  ];
}