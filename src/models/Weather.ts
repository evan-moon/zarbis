import { Coords } from './Coords';

export enum WeatherType {
  천둥번개 = '천둥번개',
  이슬비 = '이슬비',
  비 = '비',
  눈 = '눈',
  안개 = '안개',
  맑음 = '맑음',
  구름 = '구름',
  알수없음 = '알수없음',
}

interface WeatherCodeType {
  category: WeatherType;
  description: string;
}
export interface WeatherCodeTypeMap {
  [key: string]: WeatherCodeType;
}

export type DayNight = 'Day' | 'Night';
export interface WeatherPhoto {
  image: string;
  link: string;
  source: 'unsplash';
  weathers: WeatherType[];
  dayNight: DayNight[];
}

interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface Main {
  temp: number;
  pressure: number;
  humidity: number;
  temp_min: number;
  temp_max: number;
}

interface Wind {
  speed: number;
  deg: number;
  gust: number;
}

interface Clouds {
  all: number;
}

interface Sys {
  type: number;
  id: number;
  message: number;
  country: string;
  sunrise: number;
  sunset: number;
}

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
