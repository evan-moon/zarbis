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

interface DailyForecastWeather {
  clouds: Clouds;
  dew_point: number;
  dt: number;
  feels_like: {
    day: number;
    night: number;
    eve: number;
    morn: number;
  };
  humidity: number;
  pop: number;
  pressure: number;
  rain: number;
  sunrise: number;
  sunset: number;
  temp: {
    day: number;
    min: number;
    max: number;
    night: number;
    eve: number;
    morn: number;
  };
  cvi: number;
  weather: Weather[];
  wind_deg: 155;
  wind_speed: number;
}
export interface ForecastWeathersDataResponse {
  daily: DailyForecastWeather[];
}

export interface ForecastWeathersData {
  weather: Weather;
  temp: number;
  date: string;
}
