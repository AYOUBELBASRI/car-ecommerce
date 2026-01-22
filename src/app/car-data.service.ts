import { Injectable } from '@angular/core';

export interface Car {
    id: number;
    year: number;
    make: string;
    model: string;
    price: number;
    mileage: string;
    fuel: string;
    drive: string;
    image: string;
    description: string;
    authorName?: string;
    authorRole?: string;
    authorAvatar?: string;
}

@Injectable({ providedIn: 'root' })
export class CarDataService {
    private readonly cars: Car[] = [
        {
            id: 101,
            year: 2017,
            make: 'BMW',
            model: '3 Series',
            price: 21900,
            mileage: '54k miles',
            fuel: 'Gasoline',
            drive: 'RWD',
            image: 'assets/bmww.jpg',
            description: 'Well-maintained BMW 3 Series with a smooth ride, premium interior, and balanced performance.'
        },
        {
            id: 102,
            year: 2018,
            make: 'Audi',
            model: 'A4',
            price: 23900,
            mileage: '46k miles',
            fuel: 'Gasoline',
            drive: 'AWD',
            image: 'assets/audii.jpg',
            description: 'Audi A4 with quattro all-wheel drive, comfortable cabin, and strong efficiency for daily driving.'
        },
        {
            id: 103,
            year: 2019,
            make: 'Mercedes',
            model: 'C-Class',
            price: 27900,
            mileage: '38k miles',
            fuel: 'Gasoline',
            drive: 'RWD',
            image: 'assets/merc.jpg',
            description: 'Refined Mercedes C-Class offering luxury comfort, advanced safety features, and elegant styling.'
        },
        {
            id: 104,
            year: 2016,
            make: 'Toyota',
            model: 'Camry',
            price: 17900,
            mileage: '72k miles',
            fuel: 'Gasoline',
            drive: 'FWD',
            image: 'assets/toyota.jpg',
            description: 'Reliable Toyota Camry known for low ownership costs, comfort, and proven durability.'
        },
        {
            id: 105,
            year: 2020,
            make: 'Ford',
            model: 'Mustang',
            price: 32900,
            mileage: '22k miles',
            fuel: 'Gasoline',
            drive: 'RWD',
            image: 'assets/mustang.jpg',
            description: 'Sporty Ford Mustang with strong performance, iconic design, and exciting driving dynamics.'
        },
        {
            id: 106,
            year: 2018,
            make: 'Range Rover',
            model: 'Evoque',
            price: 28900,
            mileage: '49k miles',
            fuel: 'Diesel',
            drive: 'AWD',
            image: 'assets/jag.jpg',
            description: 'Range Rover Evoque with premium finishes, confident AWD traction, and city-friendly size.'
        },
        {
            id: 107,
            year: 2017,
            make: 'Tesla',
            model: 'Model S',
            price: 35900,
            mileage: '64k miles',
            fuel: 'Electric',
            drive: 'AWD',
            image: 'assets/tesla1.jpg',
            description: 'Electric Tesla Model S with instant torque, smooth acceleration, and modern technology features.'
        },
        {
            id: 108,
            year: 2015,
            make: 'Dodge',
            model: 'Challenger',
            price: 24900,
            mileage: '81k miles',
            fuel: 'Gasoline',
            drive: 'RWD',
            image: 'assets/dodge.jpg',
            description: 'Classic muscle-car presence with comfortable cruising, bold styling, and strong road presence.'
        },
        {
            id: 201,
            year: 2025,
            make: 'Porsche',
            model: '911 Carrera',
            price: 145900,
            mileage: '0 miles',
            fuel: 'Gasoline',
            drive: 'RWD',
            image: 'assets/new-range.jpg',
            description: 'Brand-new Porsche 911 Carrera featuring precision handling, iconic design, and a driver-first cockpit.',
            authorName: 'LuxeWheels',
            authorRole: 'Official Dealer',
            authorAvatar: 'assets/sarah.jpg'
        }
    ];

    getCarById(id: number): Car | undefined {
        return this.cars.find((c) => c.id === id);
    }

    getUsedCars(): Car[] {
        return this.cars.filter((c) => c.id >= 100 && c.id < 200);
    }

    getAllCars(): Car[] {
        return this.cars;
    }

    getNewCars(): Car[] {
        return this.cars.filter((c) => c.id >= 200 && c.id < 300);
    }
}
