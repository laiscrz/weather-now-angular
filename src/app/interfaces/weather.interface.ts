export interface WeatherResponse {
  name: string; 
  sys: {
    country: string; 
  };
  main: {
    temp: number; 
    temp_max: number; 
    temp_min: number; 
    humidity: number; 
  };
  weather: {
    description: string; 
    icon: string; 
  }[];
  wind: {
    speed: number;
  };
}
