import { Component, Input } from '@angular/core';
import { faDroplet, faTemperatureHigh, faTemperatureLow, faWind } from '@fortawesome/free-solid-svg-icons';
import { WeatherDatas } from 'src/app/models/interfaces/WeatheDatas';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: []
})
export class WeatherCardComponent {

  // Entrada de dados @Input
  @Input() weatherDatasInput!: WeatherDatas;
  // Dados da previsão do tempo recebidos pelo component pai

  minTempIcon = faTemperatureLow;
  maxTempIcon = faTemperatureHigh;
  humidityIcon = faDroplet;
  windIcon = faWind;

  // // Temporário para ver o recebimento dos dados
  // ngOnInit(): void {
  //   console.log(this.weatherDatasInput)
  // }

}
