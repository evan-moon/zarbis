import { createContext, Dispatch, SetStateAction } from 'react';
import { WeatherData } from 'src/models';

export interface GlobalState {
  weather: WeatherData | null;
  setWeather: Dispatch<SetStateAction<WeatherData | null>>;
}
export const GlobalContext = createContext<GlobalState>({
  weather: null,
  setWeather: () => {},
});
