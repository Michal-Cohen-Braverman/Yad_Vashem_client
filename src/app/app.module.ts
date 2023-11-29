import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatInputModule } from '@angular/material/input';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { MatCardModule } from "@angular/material/card";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { HoursComponent } from './hours/hours.component';
import { HomePageComponent } from './home-page/home-page.component';

import { HttpClientModule } from '@angular/common/http';
@NgModule({
    declarations: [
        AppComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatInputModule,
        AppRoutingModule,
        MatCardModule,
        MatToolbarModule,
        MatButtonModule,
        HttpClientModule

    ]
})
export class AppModule { }

