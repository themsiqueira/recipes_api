import axios, { AxiosInstance, AxiosResponse, AxiosRequestConfig } from 'axios';

export default class HttpClient {
  protected readonly axiosInstance: AxiosInstance;

  public constructor() {
    this.axiosInstance = axios.create({ headers: {} });
  }

  public async request<T>(
    options: AxiosRequestConfig,
  ): Promise<AxiosResponse<T>> {
    const response = await this.axiosInstance(options);
    return response;
  }
}
