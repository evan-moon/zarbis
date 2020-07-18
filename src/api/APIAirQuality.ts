import { AxiosRequestConfig } from 'axios';
import { APICore } from 'src/api/APICore';
import { AQI_API_KEY } from 'src/constants';
import { AqiData, AqiDataResponse, Coords } from 'src/models';

class APIAirQuality extends APICore {
  constructor(options: AxiosRequestConfig = {}, key = '') {
    super(options, key);
  }

  async fetchAirQuality({ lat, lon }: Coords): Promise<AqiData> {
    const { aqi }: AqiDataResponse = (await this._get(`/feed/geo:${lat};${lon}/`, { token: this.token })).data.data;
    return {
      aqi,
    };
  }
}

export default new APIAirQuality(
  {
    baseURL: 'https://api.waqi.info',
  },
  AQI_API_KEY
);
