import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WeatherResponse } from '../interfaces/weather.interface';

@Injectable({
  providedIn: 'root',
})
export class ForecastService {
  private apiKey = 'e9da4d38051b2c21be1b8edcbf7c9656';
  private apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

  constructor(private http: HttpClient) { }

  getWeather(cityName: string): Observable<WeatherResponse> {  
    const url = `${this.apiUrl}?q=${encodeURIComponent(cityName)}&appid=${this.apiKey}&units=metric&lang=pt_br`;
    return this.http.get<WeatherResponse>(url);  
  }
}
