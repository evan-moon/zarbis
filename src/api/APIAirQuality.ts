import { AxiosRequestConfig } from 'axios';
import { APICore } from 'src/api/APICore';
import { AQI_API_KEY } from 'src/constants';
import { Pos } from 'src/interfaces';

class APIAirQuality extends APICore {
  constructor (options: AxiosRequestConfig = {}, key = '') {
    super(options, key);
  }

  fetchAirQuality ({ lat, lon }: Pos) {
    const endpoint = `/feed/geo:${lat};${lon}/`;
    return this._get(endpoint, {
      token: this.token,
    });
  }
}

export default new APIAirQuality({
  baseURL: 'https://api.waqi.info',
}, AQI_API_KEY);
