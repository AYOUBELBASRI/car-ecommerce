import { Component } from '@angular/core';
import { Header } from '../header/header';
import { Body } from '../body/body';
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-home',
  imports: [Header, Body, Footer],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
}
