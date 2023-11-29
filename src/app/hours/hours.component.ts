import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { Museum } from '../models/museum.models';
import { MuseumService } from '../service/museum.service';
import {MatButtonToggleModule} from '@angular/material/button-toggle';

/**
 * @title Basic button-toggles
 */
@Component({
  selector: 'app-hours',
  templateUrl: './hours.component.html',
  standalone: true,
  styleUrls: ['./hours.component.css'],
  imports: [MatCardModule, MatToolbarModule, MatButtonModule, CommonModule, MatButtonToggleModule],
})

export class HoursComponent {
  listMuseum:Museum[]=[];
  morrning:Museum[]=[];
  noon:Museum[]=[];
  afterNoon:Museum[]=[];
  listTimes:any[]= [];
  @Output() startTime = new EventEmitter<string>();

  sendStartTime(startTime: string) {
    this.startTime.emit(startTime);
  }
  hoursListNoon(){
    this.srv.getList().subscribe((res:Museum[])=> {
      this.listMuseum = res;
      this.noon=this.listMuseum.filter(x=>{
        let d=new Date(x.startTime);
        if(d.getHours()>12 && d.getHours()<15){
          return x}
          else return
      })
      
      console.log(this.listMuseum);
   
    })
  }
  hoursListAfternoon(){
    this.srv.getList().subscribe((res:Museum[])=> {
      this.listMuseum = res;
      this.afterNoon=this.listMuseum.filter(x=>{
        let d=new Date(x.startTime);
        if(d.getHours()>15 && d.getHours()<16){
          return x}
          else return
      })
    
   
    })
  }
  hoursListMorrning(){
    this.srv.getList().subscribe((res:Museum[])=> {
      this.listMuseum = res;
      this.morrning=this.listMuseum.filter(x=>{
        let d=new Date(x.startTime);
        if(d.getHours()>9 && d.getHours()<12){
          return x}
          else return
      })

      console.log(this.listMuseum);
   
    })
  }
  constructor(private srv:MuseumService){}
  ngOnInit(): void {
 
  }
}
