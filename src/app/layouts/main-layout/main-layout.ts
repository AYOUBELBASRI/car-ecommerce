import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { Navbar } from '../../navbar/navbar';
import { Footer } from '../../footer/footer';
import { filter } from 'rxjs';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [RouterOutlet, Navbar, Footer],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.css'
})
export class MainLayout implements OnInit {
  isHomeRoute = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.setRouteState(this.router.url);

    this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe((event) => {
        this.setRouteState(event.urlAfterRedirects);
      });
  }

  private setRouteState(url: string): void {
    this.isHomeRoute = url === '/home' || url.startsWith('/home?') || url.startsWith('/home#');
  }
}
