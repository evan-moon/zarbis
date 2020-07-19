import { AxiosRequestConfig } from 'axios';
import { APICore } from 'src/api/APICore';
import { OPEN_WEATHER_API_KEY } from 'src/constants';
import { WeatherDataResponse, Coords, ForecastWeathersDataResponse } from 'src/models';

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
   * @desc 지정된 좌표의 다음 7일 동안의 날씨를 1일 간격으로 표시
   */
  async fetchForecastWeathersByGeoLocation({ lat, lon }: Coords): Promise<ForecastWeathersDataResponse> {
    try {
      const response = (await this._get('/onecall', { lat, lon, appid: this.token })).data;
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
