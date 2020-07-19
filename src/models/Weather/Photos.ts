import { WeatherType } from './Types';

export type DayNight = 'Day' | 'Night';

export interface WeatherPhoto {
  image: string;
  link: string;
  source: 'unsplash';
  weathers: WeatherType[];
  dayNight: DayNight[];
}
