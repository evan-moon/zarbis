import { AxiosRequestConfig } from "axios";
import { APICore } from "src/api/APICore";
import { OPEN_WEATHER_API_KEY } from "src/constants";
import { WeatherDataResponse, WeatherData, Pos } from "src/models";

class APIOpenWeather extends APICore {
  constructor(options: AxiosRequestConfig, key = "") {
    super(options, key);
  }

  async fetchWeatherByGeoLocation({ lat, lon }: Pos): Promise<WeatherData> {
    try {
      const response: WeatherDataResponse = (
        await this._get("", { lat, lon, appid: this.token })
      ).data;
      return {
        weather: response.weather[0],
        city: response.name,
        country: response.sys.country,
        temp: response.main.temp,
      };
    } catch (e) {
      throw e;
    }
  }
}

export default new APIOpenWeather(
  {
    baseURL: "https://api.openweathermap.org/data/2.5/weather",
  },
  OPEN_WEATHER_API_KEY
);
