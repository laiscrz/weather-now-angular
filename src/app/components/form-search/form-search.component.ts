import { Component, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { ForecastService } from '../../services/weather-api.service';

@Component({
  selector: 'form-search',
  standalone: true,
  templateUrl: './form-search.component.html',
  styleUrls: ['./form-search.component.css'],
  imports: [CommonModule, MatIconModule, ReactiveFormsModule],
})
export class FormSearchComponent {

  searchForm: FormGroup;
  
  @Output() weatherData = new EventEmitter<any>();
  @Output() alertMessage = new EventEmitter<string>();

  constructor(private forecastService: ForecastService) {
    this.searchForm = new FormGroup({
      cityName: new FormControl('', [Validators.required, Validators.minLength(2)]),
    });
  }

  onSubmit() {
    if (this.searchForm.invalid) {
      this.alertMessage.emit('Você precisa digitar uma cidade válida...');
      return;
    }
  
    const cityName = this.searchForm.value.cityName.trim();
    if (cityName) {
      this.forecastService.getWeather(cityName).subscribe({
        next: (data) => {
          console.log('Dados recebidos da API:', data); 
          this.weatherData.emit(data);
        },
        error: () => this.alertMessage.emit('Cidade não encontrada. Tente novamente!'),
      });
    }
  }
}  
