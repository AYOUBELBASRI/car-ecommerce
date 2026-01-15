import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarsListing } from './cars-listing';

describe('CarsListing', () => {
  let component: CarsListing;
  let fixture: ComponentFixture<CarsListing>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarsListing]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarsListing);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
