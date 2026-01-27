import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BackButtonComponent } from '../shared/components/back-button/back-button';

@Component({
  selector: 'app-how-it-works',
  imports: [RouterLink, BackButtonComponent],
  templateUrl: './how-it-works.html',
  styleUrl: './how-it-works.css',
})
export class HowItWorks {
}
