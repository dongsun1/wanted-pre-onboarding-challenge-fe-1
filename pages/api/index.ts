import axios, { AxiosRequestConfig } from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080",
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use((config: AxiosRequestConfig) => {
  if (typeof localStorage !== "undefined") {
    const loginToken = localStorage.getItem("login-token");

    if (loginToken && config.headers) {
      (config.headers as { [header: string]: string | string[] })[
        "Authorization"
      ] = `Bearer ${loginToken}`;
    }
  }
  return config;
});

export default api;
