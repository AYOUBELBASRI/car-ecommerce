import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Navbar } from '../navbar/navbar';

@Component({
  selector: 'app-header',
  imports: [RouterLink, Navbar],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  heroImage = 'assets/teslahero.jpg';

  brandIcons = [
    'assets/toyota.png',
    'assets/audi.png',
    'assets/landrover.png',
    'assets/bmw.png',
    'assets/jaguar.png',
    'assets/mercedes.png',
    'assets/mark1.png',
    'assets/mark2.png',
    'assets/mark3.png',
    'assets/mark5.png',
    'assets/mark6.png',
    'assets/mark7.png'


  ];

  conditions = ['Used Cars', 'New Cars'];
  makes = ['Any Make', 'Toyota', 'Ford', 'BMW', 'Mercedes'];
  models = ['Any Model'];
  priceRanges = ['$5,000 - $50,000', '$4,000 - $6,000'];


}


