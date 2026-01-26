import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseChartDirective } from 'ng2-charts';
import { Chart, ChartConfiguration, ChartData, ChartType, ChartOptions, registerables } from 'chart.js';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule, BaseChartDirective],
  templateUrl: './admin-dashboard.html',
  styleUrl: './admin-dashboard.css',
})
export class AdminDashboard {
  constructor() {
    Chart.register(...registerables);
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

  public revenueVsOrdersChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        display: false,
      },
    },
  };
  public revenueVsOrdersChartType: ChartType = 'line';
  public revenueVsOrdersChartData: ChartData<'line'> = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      {
        data: [180, 200, 190, 220, 200, 230, 210],
        label: 'Revenue',
        fill: true,
        tension: 0.3,
        borderColor: '#8b5cf6', // A purple color
        backgroundColor: 'rgba(139, 92, 246, 0.2)', // Light purple for fill
        pointRadius: 0,
      },
      {
        data: [160, 180, 170, 200, 180, 210, 190],
        label: 'Orders',
        fill: true,
        tension: 0.3,
        borderColor: '#a78bfa', // A lighter purple color
        backgroundColor: 'rgba(167, 139, 250, 0.2)', // Lighter purple for fill
        pointRadius: 0,
      },
    ],
  };

  public saleCategoryDonutChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
  };
  public saleCategoryDonutChartType: ChartType = 'doughnut';
  public saleCategoryDonutChartData: ChartData<'doughnut'> = {
    labels: ['Luxury Cars', 'Sedans', 'SUVs', 'Trucks'],
    datasets: [
      {
        data: [300, 200, 150, 100],
        backgroundColor: ['#8b5cf6', '#a78bfa', '#c4b5fd', '#ddd6fe'], // Shades of purple
        hoverBackgroundColor: ['#7c3aed', '#9333ea', '#a855f7', '#c084fc'],
        borderColor: 'white',
        borderWidth: 2,
      },
    ],
  };
}