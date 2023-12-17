import { Component, OnDestroy, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { WeatherDatas } from 'src/app/models/interfaces/WeatheDatas';
import { Subject, take, takeUntil } from 'rxjs';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-weather-home',
  templateUrl: './weather-home.component.html',
  styleUrls: []
})
export class WeatherHomeComponent implements
OnInit, // Ciclo de vida que monta o component
OnDestroy // Ciclo de vida que desponta o component
{

  // $ SINALIZAR QUE EU VOU TRABALHAR COM "Observables"
  private readonly destroy$: Subject<void> = new Subject();
  initialCity = "Rio de Janeiro";
  weatherDatas!: WeatherDatas;
  searchIcon = faMagnifyingGlass;

  constructor(private weatherService: WeatherService) {}


    /**
      Ciclo de vida do Angular,
      Metodo que precisa ser executado logo que o componente é inicializado.
      que é chamado de onInit.

     */


    // Código que sera executado toda vez que o nosso component ele seja inicializado.
    // consumir o o serviço.

    ngOnInit(): void {
      // Quando o component for carregado, execute
      this.getWeatherDatas(this.initialCity);
    }

    getWeatherDatas(city: string): void {
      this.weatherService.getWeatherDatas(city)
      .pipe(
        takeUntil(this.destroy$) // Antes de entrar na assinatura.
        // Evita o vazamento de memória
      )
      .subscribe({
        next: (resp) => {
          resp && (this.weatherDatas = resp);
          console.log(this.weatherDatas)
        },
        error: (error) => {
          console.log(error)
        }
      })
    }


    // Metodo para chamar o getWeather
    onSubmit(): void {
      this.getWeatherDatas(this.initialCity);
      this.initialCity = '';
    }


    // Ciclo de vida onde o component é desmontado da tela
  ngOnDestroy(): void {
    /**
      Quando o component for fechado/desmontado
    */
    this.destroy$.next();
    this.destroy$.complete();
  }
}
