import { Component, AfterViewInit, ViewChildren, ElementRef, inject, PLATFORM_ID, QueryList } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { DecimalPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PartsService } from '../parts/parts.service';
import { Part } from '../shared/models/part.model';

interface Car {
  id: number;
  year: number;
  make: string;
  model: string;
  price: number;
  mileage: string;
  fuel: string;
  drive: string;
  image: string;
}

interface Testimonial {
  name: string;
  role: string;
  text: string;
  rating: number;
  avatar: string;
}

@Component({
  selector: 'app-body',
  imports: [DecimalPipe, RouterLink],
  templateUrl: './body.html',
  styleUrl: './body.css',
})
export class Body implements AfterViewInit {
  @ViewChildren('revealCard') revealCards!: QueryList<ElementRef>;
  private readonly platformId = inject(PLATFORM_ID);
  private readonly partsService = inject(PartsService);

  trendingParts: Part[] = [];

  trendingCars: Car[] = [
    { id: 101, year: 2017, make: 'BMW', model: '3 Series', price: 21900, mileage: '54k miles', fuel: 'Gasoline', drive: 'RWD', image: 'assets/bmww.jpg' },
    { id: 102, year: 2018, make: 'Audi', model: 'A7', price: 23900, mileage: '46k miles', fuel: 'Gasoline', drive: 'AWD', image: 'assets/audii.jpg' },
    { id: 103, year: 2019, make: 'Mercedes', model: 'C-Class', price: 27900, mileage: '38k miles', fuel: 'Gasoline', drive: 'RWD', image: 'assets/merc.jpg' },
    { id: 104, year: 2016, make: 'Ford', model: 'Mustang', price: 19900, mileage: '62k miles', fuel: 'Gasoline', drive: 'RWD', image: 'assets/mustang.jpg' },
    { id: 105, year: 2020, make: 'Tesla', model: 'Model 3', price: 34900, mileage: '22k miles', fuel: 'Electric', drive: 'AWD', image: 'assets/teslahero.jpg' },
    { id: 106, year: 2015, make: 'Toyota', model: 'Camry', price: 17900, mileage: '72k miles', fuel: 'Gasoline', drive: 'FWD', image: 'assets/toyota.jpg' },
    { id: 107, year: 2018, make: 'Range Rover', model: 'Velar', price: 45900, mileage: '32k miles', fuel: 'Diesel', drive: 'AWD', image: 'assets/new-range.jpg' },
    { id: 108, year: 2017, make: 'Ford', model: 'RS7', price: 55900, mileage: '28k miles', fuel: 'Gasoline', drive: 'AWD', image: 'assets/audirs7.jpg' },

  ];

  features = [
    { title: '12-Month Warranty', desc: 'Every car comes with a standard warranty for your peace of mind.', icon: 'shield-check' },
    { title: 'Easy Financing', desc: 'Get pre-qualified in minutes with no impact on your credit score.', icon: 'wallet' },
    { title: '7-Day Return Policy', desc: 'Love it or return it. If you\'re not completely satisfied, bring it back.', icon: 'calendar' }
  ];

  testimonials: Testimonial[] = [
    {
      name: 'Jessica',
      role: 'Verified Buyer',
      text: 'I sold my car in 20 minutes and got a great price. The process was transparent.',
      rating: 5,
      avatar: 'assets/sarah.jpg'
    },
    {
      name: 'Michael Chen',
      role: 'Verified Buyer',
      text: 'Found my dream car at a price I couldn\'t beat anywhere else.',
      rating: 5,
      avatar: 'assets/michael.jpg'
    },
    {
      name: 'Jessica Ford',
      role: 'Verified Seller',
      text: 'Financing was a breeze. I was approved in under an hour.',
      rating: 5,
      avatar: 'assets/jessica.jpg'
    }
  ];

  onFavoriteToggle(car: Car): void {
    console.log(`Toggled favorite for ${car.make} ${car.model}`);
    // Implement actual favorite toggling logic here, e.g., update a service or local storage.
  }

  onPartFavoriteToggle(part: Part): void {
    console.log(`Toggled favorite for ${part.name}`);
    // Implement actual favorite toggling logic here
  }

  ngOnInit(): void {
    this.partsService.getParts().subscribe(parts => {
      this.trendingParts = parts.slice(0, 4); // Get first 4 parts for trending
    });
  }

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    // Initialize GSAP ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // GSAP scroll animations
    this.initGSAPAnimations();

    // Keep existing IntersectionObserver for card reveals
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const delay = parseInt(entry.target.getAttribute('data-animation-delay') || '0');
            setTimeout(() => {
              entry.target.classList.add('animate');
            }, delay);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    // Start observing cards after a small delay to ensure DOM is ready
    setTimeout(() => {
      this.revealCards.forEach((card: ElementRef, index: number) => {
        card.nativeElement.setAttribute('data-animation-delay', (index * 80).toString());
        observer.observe(card.nativeElement);
      });
    }, 100);
  }

  private initGSAPAnimations(): void {
    // Set initial states for elements that will be animated
    gsap.set('.reveal-card', {
      opacity: 1,
      y: 0,
      scale: 1,
      force3D: true,
      transformOrigin: 'center center'
    });
    gsap.set('.feature-item', {
      opacity: 1,
      y: 0,
      force3D: true
    });
    gsap.set('.testimonial-card', {
      opacity: 1,
      y: 0,
      force3D: true
    });

    // Car cards reveal animation with GSAP (lighter and smoother)
    gsap.utils.toArray('.reveal-card').forEach((card: any, index: number) => {
      gsap.fromTo(card,
        {
          y: 30,
          opacity: 0,
          scale: 0.95,
          force3D: true,
          transformOrigin: 'center bottom'
        },
        {
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            end: 'bottom 15%',
            toggleActions: 'play none none reverse',
            markers: false
          },
          duration: 0.6,
          y: 0,
          opacity: 1,
          scale: 1,
          ease: 'power1.out',
          delay: index * 0.05,
          force3D: true
        }
      );
    });

    // Features section animation (simplified)
    gsap.fromTo('.feature-item',
      {
        y: 20,
        opacity: 0,
        force3D: true
      },
      {
        scrollTrigger: {
          trigger: '.features-section',
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        },
        duration: 0.8,
        y: 0,
        opacity: 1,
        stagger: 0.1,
        ease: 'power1.out',
        force3D: true
      }
    );

    // Testimonials section animation (simplified)
    gsap.fromTo('.testimonial-card',
      {
        y: 20,
        opacity: 0,
        force3D: true
      },
      {
        scrollTrigger: {
          trigger: '.testimonials-section',
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        },
        duration: 0.8,
        y: 0,
        opacity: 1,
        stagger: 0.08,
        ease: 'power1.out',
        force3D: true
      }
    );
  }
}