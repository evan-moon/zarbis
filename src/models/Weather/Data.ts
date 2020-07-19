import { Coords } from 'src/models/Coords';
import { WeatherCodeType } from './Types';
import { Weather, Main, Clouds, Sys, Wind } from './Props';

export interface WeatherDataResponse {
  coord: Coords;
  weather: Weather[];
  base: string;
  main: Main;
  visibility: number;
  wind: Wind;
  clouds: Clouds;
  dt: number;
  sys: Sys;
  id: number;
  name: string;
  cod: number;
}

export interface WeatherData {
  weather: Weather;
  city: string;
  country: string;
  temp: number;
  type: WeatherCodeType;
}
