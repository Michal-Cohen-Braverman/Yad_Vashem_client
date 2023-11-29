import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-amount-of-tickets',
  templateUrl: './amount-of-tickets.component.html',
  standalone: true,
  styleUrls: ['./amount-of-tickets.component.css'],
  imports:[MatButtonModule]
})
export class AmountOfTicketsComponent implements OnInit {
amount:number =1;
date="14:00"
d=new Date(this.date);
bool:boolean = false;

  constructor() { }
changeAmount  (flag:boolean)  {
  if(flag){
    this.amount++;
  }
  else{
    this.amount--;
  }
}
  ngOnInit(): void {
  }
checkD(){
  if(this.d.getHours()<12){
    this.bool=true;
  }
}
}
