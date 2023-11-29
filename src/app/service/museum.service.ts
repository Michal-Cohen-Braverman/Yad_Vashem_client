import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { Museum } from '../models/museum.models';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MuseumService {
    museum: Museum[] = [];
    serverUrl:any = environment.serverUrl;

    //  httpOptions = {

    //   headers: new HttpHeaders({
    //     'Content-Type': 'application/json'
    //   })      
    //  }
    
   options = {

      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),

      withCredentials: true

    };
    constructor(private http: HttpClient){}

    getList() :Observable<any>{
       let url:string = '/GetMuseum';
    
       return this.http.get(this.serverUrl+url,this.options)
    }
}