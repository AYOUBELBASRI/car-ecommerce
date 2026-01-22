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
            image: 'assets/used-cars/christopher-luther-R4vg8LvvwLQ-unsplash.jpg',
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
            image: 'assets/used-cars/dori-bano-ll-erGGrh0I-unsplash.jpg',
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
            image: 'assets/used-cars/dusan-ristic-1tiuxHqWYDg-unsplash.jpg',
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
            image: 'assets/used-cars/photogon-warren-valentine-vYWKJQbleTY-unsplash.jpg',
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
            image: 'assets/used-cars/raylor-photo-p11x9KyMiRA-unsplash.jpg',
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
            image: 'assets/used-cars/redd-francisco-ZuZmomnoUaY-unsplash.jpg',
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
            image: 'assets/used-cars/zoshua-colah-FI0EUzfv9XY-unsplash.jpg',
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
            image: 'assets/used-cars/zuka-zurabishvili-aM-v78h2Bn8-unsplash.jpg',
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
            image: 'assets/new cars/d-panyukov-DwxlhTvC16Q-unsplash.jpg',
            description: 'Brand-new Porsche 911 Carrera featuring precision handling, iconic design, and a driver-first cockpit.',
            authorName: 'LuxeWheels',
            authorRole: 'Official Dealer',
            authorAvatar: 'assets/sarah.jpg'
        },
        {
            id: 202,
            year: 2025,
            make: 'Audi',
            model: 'RS e-tron GT',
            price: 159900,
            mileage: '0 miles',
            fuel: 'Electric',
            drive: 'AWD',
            image: 'assets/new cars/hakon-sataoen-qyfco1nfMtg-unsplash.jpg',
            description: 'High-performance electric grand tourer with instant torque, luxury finishes, and confident quattro AWD.',
            authorName: 'LuxeWheels',
            authorRole: 'Official Dealer',
            authorAvatar: 'assets/michael.jpg'
        },
        {
            id: 203,
            year: 2025,
            make: 'Mercedes',
            model: 'AMG GT',
            price: 178500,
            mileage: '0 miles',
            fuel: 'Hybrid',
            drive: 'AWD',
            image: 'assets/new cars/joey-banks-YApiWyp0lqo-unsplash.jpg',
            description: 'New Mercedes-AMG GT with aggressive styling, premium cabin, and modern performance technology.',
            authorName: 'LuxeWheels',
            authorRole: 'Official Dealer',
            authorAvatar: 'assets/jessica.jpg'
        },
        {
            id: 204,
            year: 2025,
            make: 'Lamborghini',
            model: 'Huracán EVO',
            price: 249900,
            mileage: '0 miles',
            fuel: 'Gasoline',
            drive: 'AWD',
            image: 'assets/new cars/marek-pospisil-oUBjd22gF6w-unsplash.jpg',
            description: 'Exotic supercar with breathtaking design, razor-sharp response, and an unforgettable driving experience.',
            authorName: 'LuxeWheels',
            authorRole: 'Official Dealer',
            authorAvatar: 'assets/sarah.jpg'
        },
        {
            id: 205,
            year: 2025,
            make: 'Range Rover',
            model: 'Sport',
            price: 124900,
            mileage: '0 miles',
            fuel: 'Hybrid',
            drive: 'AWD',
            image: 'assets/new cars/olav-tvedt-6lSBynPRaAQ-unsplash.jpg',
            description: 'Luxury performance SUV with advanced hybrid power, refined comfort, and confident all-terrain capability.',
            authorName: 'LuxeWheels',
            authorRole: 'Official Dealer',
            authorAvatar: 'assets/michael.jpg'
        },
        {
            id: 206,
            year: 2025,
            make: 'Tesla',
            model: 'Model S Plaid',
            price: 109990,
            mileage: '0 miles',
            fuel: 'Electric',
            drive: 'AWD',
            image: 'assets/new cars/stefan-rodriguez-2AovfzYV3rc-unsplash.jpg',
            description: 'Flagship electric sedan with extreme acceleration, long range, and a minimalist high-tech interior.',
            authorName: 'LuxeWheels',
            authorRole: 'Official Dealer',
            authorAvatar: 'assets/jessica.jpg'
        },
        {
            id: 207,
            year: 2025,
            make: 'BMW',
            model: 'M4 Competition',
            price: 89900,
            mileage: '0 miles',
            fuel: 'Gasoline',
            drive: 'RWD',
            image: 'assets/new cars/tyler-clemmensen-4gSavS9pe1s-unsplash.jpg',
            description: 'Performance coupe with track-ready dynamics, premium interior materials, and modern driver assistance.',
            authorName: 'LuxeWheels',
            authorRole: 'Official Dealer',
            authorAvatar: 'assets/sarah.jpg'
        },
        {
            id: 208,
            year: 2025,
            make: 'Ferrari',
            model: 'Roma',
            price: 239000,
            mileage: '0 miles',
            fuel: 'Gasoline',
            drive: 'RWD',
            image: 'assets/new cars/tyler-clemmensen-wLpTPp2dzsY-unsplash.jpg',
            description: 'Elegant grand tourer blending luxury and performance, with signature styling and a refined cockpit.',
            authorName: 'LuxeWheels',
            authorRole: 'Official Dealer',
            authorAvatar: 'assets/michael.jpg'
        }
    ];

    getCarById(id: number): Car | undefined {
        return this.cars.find((c) => c.id === id);
    }

    getUsedCars(): Car[] {
        return this.cars.filter((c) => c.id >= 100 && c.id < 200);
    }

    getNewCars(): Car[] {
        return this.cars.filter((c) => c.id >= 200 && c.id < 300);
    }
}
