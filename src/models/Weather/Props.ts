import { Coords } from 'src/models/Coords';

export interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

/**
 * @property temp 기온
 * @property temp_min 최저기온
 * @property temp_max 최고기온
 * @property feels_like 체감기온
 * @property pressure 기압
 * @property sea_level 해상기압
 * @property grnd_level 육상기압
 * @property humidity 습도
 */
export interface Main {
  temp: number;
  temp_min: number;
  temp_max: number;
  feels_like: number;
  pressure: number;
  sea_level?: number;
  grnd_level?: number;
  humidity: number;
}

export interface Wind {
  speed: number;
  deg: number;
  gust: number;
}

export interface Clouds {
  all: number;
}

export interface Sys {
  type: number;
  id: number;
  message: number;
  country: string;
  sunrise: number;
  sunset: number;
}
