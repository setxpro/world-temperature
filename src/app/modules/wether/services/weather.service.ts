import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/enviroments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  // key
  private apikey = environment.OPEN_WEATHER.apiKey;

  constructor(private http: HttpClient) { }

  // Observable... breve resumo
  // inscrever para conseguir acessar os dados

  getWeatherDatas(city: string): Observable<any> {
    return this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&mode=json&appid=${this.apikey}`, {});
  }
}
