import { Component, Input, OnInit } from '@angular/core';
import '../hours/hours.component'
import { AmountOfTicketsComponent } from '../amount-of-tickets/amount-of-tickets.component';
import { HoursComponent } from '../hours/hours.component';
import { MatButtonModule } from '@angular/material/button';

@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.css'],
    standalone: true,
    imports: [HoursComponent, AmountOfTicketsComponent, MatButtonModule]
})
export class HomePageComponent implements OnInit {

  register(){
    alert("register");
  }
  constructor() { }

  ngOnInit(): void {
  }

}
