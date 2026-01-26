import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin-dashboard.html',
  styleUrl: './admin-dashboard.css',
})
export class AdminDashboard {
  constructor() {
  }
  // Admin dashboard data - you can customize this based on your needs
  stats = [
    {
      title: 'Total Cars',
      value: '2,847',
      change: '+12%',
      changeType: 'positive' as const
    },
    {
      title: 'Active Listings',
      value: '1,234',
      change: '+8%',
      changeType: 'positive' as const
    },
    {
      title: 'Sold This Month',
      value: '156',
      change: '-5%',
      changeType: 'negative' as const
    },
    {
      title: 'Revenue',
      value: '$2.4M',
      change: '+15%',
      changeType: 'positive' as const
    }
  ] as const;

  recentActivities = [
    {
      action: 'New car listed',
      item: '2024 Tesla Model S',
      time: '2 minutes ago',
      type: 'listing'
    },
    {
      action: 'Car sold',
      item: '2023 BMW X5',
      time: '15 minutes ago',
      type: 'sale'
    },
    {
      action: 'Customer review',
      item: '5-star rating on Mercedes-Benz C-Class',
      time: '1 hour ago',
      type: 'review'
    },
    {
      action: 'Order placed',
      item: '2022 Ford Mustang',
      time: '2 hours ago',
      type: 'order'
    }
  ];
}