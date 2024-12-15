import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "../../components/header/header.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { WeatherResponse } from '../../interfaces/weather.interface'; 
import { FormSearchComponent } from '../../components/form-search/form-search.component';

@Component({
  selector: 'app-forecast',
  imports: [HeaderComponent, FooterComponent, FormSearchComponent, CommonModule],
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ForecastComponent {
  weatherData: WeatherResponse | null = null;  
  alertMessage: string | null = null;

  handleWeatherData(data: WeatherResponse): void {
    
    this.weatherData = data;
    this.alertMessage = null; 
  }


  handleAlertMessage(message: string): void {
    this.alertMessage = message;
  }
}
