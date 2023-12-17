import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  // key
  private apikey = '587dc786696ee7a8bdd593d83c6be757';

  constructor(private http: HttpClient) { }

  // Observable... breve resumo
  // inscrever para conseguir acessar os dados

  getWeatherDatas(city: string): Observable<any> {
    return this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&mode=json&appid=${this.apikey}`, {});
  }
}
