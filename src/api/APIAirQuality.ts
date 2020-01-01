import { AxiosRequestConfig } from 'axios';
import { APICore } from 'src/api/APICore';
import { AQI_API_KEY } from 'src/constants';
import { AqiData, AqiDataResponse, Pos } from 'src/interfaces';

class APIAirQuality extends APICore {
  constructor (options: AxiosRequestConfig = {}, key = '') {
    super(options, key);
  }

  async fetchAirQuality ({ lat, lon }: Pos): Promise<AqiData> {
    const response: AqiDataResponse = (await this._get(`/feed/geo:${lat};${lon}/`, { token: this.token })).data.data;
    return {
      aqi: response.aqi,
    }
  }
}

export default new APIAirQuality({
  baseURL: 'https://api.waqi.info',
}, AQI_API_KEY);
