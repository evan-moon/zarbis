import { AxiosRequestConfig } from 'axios';
import { APICore } from 'src/api/APICore';
import { OPEN_WEATHER_API_KEY } from 'src/constants';
import { WeatherDataResponse, Coords } from 'src/models';

class APIOpenWeather extends APICore {
  constructor(options: AxiosRequestConfig, key = '') {
    super(options, key);
  }

  /**
   * @desc 지정된 좌표의 현재 날씨
   */
  async fetchCurrentWeatherByGeoLocation({ lat, lon }: Coords): Promise<WeatherDataResponse> {
    try {
      const response: WeatherDataResponse = (await this._get('/weather', { lat, lon, appid: this.token })).data;
      return response;
    } catch (e) {
      throw e;
    }
  }

  /**
   * @desc 지정된 좌표의 다음 5일 동안의 날씨를 3시간 간격으로 표시
   */
  async fetchForecast5daysByGeoLocation({ lat, lon }: Coords): Promise<any> {
    try {
      const response = (await this._get('/forecast', { lat, lon, appid: this.token })).data;
      console.log(response);
      return response;
    } catch (e) {
      throw e;
    }
  }
}

export default new APIOpenWeather(
  {
    baseURL: 'https://api.openweathermap.org/data/2.5',
  },
  OPEN_WEATHER_API_KEY
);
