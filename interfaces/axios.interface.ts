import { AxiosRequestConfig } from "axios";

export interface AxiosResponse<T = any> extends Promise<T> {
  data: T;
  token: string;
  message: string;
  status: number;
  statusText: string;
  headers: any;
  config: AxiosRequestConfig;
  request?: any;
}
