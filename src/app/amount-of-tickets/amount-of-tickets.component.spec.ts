import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmountOfTicketsComponent } from './amount-of-tickets.component';

describe('AmountOfTicketsComponent', () => {
  let component: AmountOfTicketsComponent;
  let fixture: ComponentFixture<AmountOfTicketsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmountOfTicketsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AmountOfTicketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
