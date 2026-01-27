import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Part } from '../shared/models/part.model';

@Injectable({
  providedIn: 'root'
})
export class PartsService {
  private mockParts: Part[] = [
    {
      id: 1,
      name: 'Brake Pads (Front)',
      description: 'High-performance ceramic brake pads for superior stopping power.',
      price: 75.99,
      carModel: 'Tesla Model 3',
      image: 'assets/piece/Brake-Pads.jpg',
      stock: 50
    },
    {
      id: 2,
      name: 'Oil Filter (Synthetic Ready)',
      description: 'Premium oil filter designed for synthetic oils, ensuring engine longevity.',
      price: 12.50,
      carModel: 'BMW 3 Series',
      image: 'assets/piece/Oil-Filter.jpg',
      stock: 120
    },
    {
      id: 3,
      name: 'Spark Plugs (Set of 4)',
      description: 'Iridium spark plugs for improved fuel efficiency and engine performance.',
      price: 49.99,
      carModel: 'Mercedes C-Class',
      image: 'assets/piece/Spark-Plugs.jpg',
      stock: 80
    },
    {
      id: 4,
      name: 'Air Filter (Cabin)',
      description: 'Activated carbon cabin air filter to keep your car\'s interior fresh.',
      price: 25.00,
      carModel: 'Audi A4',
      image: 'assets/piece/Air-Filter.jpg',
      stock: 70
    },
    {
      id: 5,
      name: 'Wiper Blades (Beam Design)',
      description: 'All-weather beam wiper blades for clear visibility in any condition.',
      price: 35.50,
      carModel: 'Ford Mustang',
      image: 'assets/piece/Wiper-Blades.jpg',
      stock: 100
    },
    {
      id: 6,
      name: 'Tire Pressure Sensor',
      description: 'OEM replacement tire pressure monitoring system sensor.',
      price: 40.00,
      carModel: 'Tesla Model S',
      image: 'assets/piece/Tire-Pressure-Sensor.jpg',
      stock: 60
    },
    {
      id: 7,
      name: 'Headlight Assembly (Left)',
      description: 'Complete left headlight assembly with LED daytime running lights.',
      price: 250.00,
      carModel: 'BMW X5',
      image: 'assets/piece/Headlight.jpg',
      stock: 15
    },
    {
      id: 8,
      name: 'Alternator',
      description: 'Brand new alternator for consistent power supply to your vehicle\'s electrical system.',
      price: 180.00,
      carModel: 'Mercedes E-Class',
      image: 'assets/piece/Alternator.png',
      stock: 20
    }
  ];

  constructor() { }

  getParts(): Observable<Part[]> {
    return of(this.mockParts);
  }

  getPartById(id: number): Observable<Part | undefined> {
    return of(this.mockParts.find(part => part.id === id));
  }
}
