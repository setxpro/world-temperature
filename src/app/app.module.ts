import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations"
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherHomeComponent } from './modules/wether/page/weather-home/weather-home.component';
import { WeatherCardComponent } from './modules/wether/components/weather-card/weather-card.component';


@NgModule({
  declarations: [
    AppComponent,
    WeatherHomeComponent,
    WeatherCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, // Animations on the navegador
    HttpClientModule, // Requests HTTP
    FormsModule, // Forms
    FontAwesomeModule, // Module from icons

  ],
  providers: [], // INJECTED SERVICES
  bootstrap: [AppComponent]
})
export class AppModule { }
