import { AxiosRequestConfig } from 'axios';
import { APICore } from 'src/api/APICore';
import { OPEN_WEATHER_API_KEY } from 'src/constants';

interface Pos {
  lat: number;
  lon: number;
}

class APIOpenWeather extends APICore {
  constructor (options: AxiosRequestConfig, key = '') {
    super(options, key);
  }

  fetchWeatherByGeoLocation ({ lat, lon }: Pos) {
    return this._get('', {
      lat,
      lon,
      appid: this.token,
    });
  }
}

export default new APIOpenWeather({
  baseURL: 'https://api.openweathermap.org/data/2.5/weather',
}, OPEN_WEATHER_API_KEY);
