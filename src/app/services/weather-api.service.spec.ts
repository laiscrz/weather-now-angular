import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { WeatherApiService } from './weather-api.service';
import { WeatherResponse } from '../interfaces/weather.interface';
import { provideHttpClient } from '@angular/common/http';

describe('WeatherApiService', () => {
  let service: WeatherApiService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        WeatherApiService,  
        provideHttpClient(),
        provideHttpClientTesting() 
      ],
    });

    service = TestBed.inject(WeatherApiService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('deve ser criado', () => {
    expect(service).toBeTruthy();
  });

  it('deve buscar os dados do clima para uma cidade', fakeAsync(() => {
    const respostaMock: WeatherResponse = {
      main: { temp: 25, temp_min: 15, temp_max: 30, humidity: 60 },
      weather: [{ description: 'céu limpo', icon: '01d' }],
      name: 'São Paulo',
      wind: { speed: 3.5 },
      sys: { country: 'BR' },
    };

    const cidade = 'São Paulo';

    service.getWeather(cidade).subscribe((resposta) => {
      expect(resposta).toEqual(respostaMock);
    });

    const requisicao = httpTestingController.expectOne(req =>
      req.url.startsWith('https://api.openweathermap.org/data/2.5/weather') &&
      req.url.includes('q=S%C3%A3o%20Paulo') 
    );

    expect(requisicao.request.method).toBe('GET');
    requisicao.flush(respostaMock); 

    tick(); 
  }));


  it('deve tratar erro ao buscar os dados', fakeAsync(() => {
    const cidade = 'CidadeInexistente';
    const mensagemErro = '404 Not Found';

    service.getWeather(cidade).subscribe({
      next: () => fail('Esperava um erro, mas recebeu uma resposta'),
      error: (erro) => {
        expect(erro.status).toBe(404);
        expect(erro.statusText).toBe('Not Found');
      },
    });

    const requisicao = httpTestingController.expectOne((req) =>
      req.url.includes('https://api.openweathermap.org/data/2.5/weather')
    );
    expect(requisicao.request.method).toBe('GET');

    requisicao.flush(mensagemErro, { status: 404, statusText: 'Not Found' });

    tick(); // Avança o tempo para garantir que todas as requisições sejam resolvidas
  }));
});
