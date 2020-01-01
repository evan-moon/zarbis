import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

export class APICore {
  protected token: string = '';
  private axios: AxiosInstance;

  constructor (options: AxiosRequestConfig = {}, token = '') {
    this.token = token;
    this.axios = axios.create(options);
  }
  async _get (uri: string, params: any) {
    try {
      return await this.axios.get(uri, { params });
    }
    catch (e) {
      return Promise.reject(e);
    }
  }
};
