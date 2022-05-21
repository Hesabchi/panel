import axios from "axios";

export let backendApi = axios.create();
export let kuknosApi = axios.create();
export let horizonApi = axios.create();

horizonApi.interceptors.request.use(async (config) => {
  config.baseURL = window.env.horizon;
  return config;
});

backendApi.interceptors.request.use(async (config) => {
  let url = window.env.base_url;

  config.baseURL = url;
  config.headers = {
    "Platform-Version": window.env.platform_Version,
    Authorization: sessionStorage.getItem("access_token"),
  };
  return config;
});

kuknosApi.interceptors.request.use(async (config) => {
  let url = window.env.kuknos_url;

  config.baseURL = url;
  config.headers = {
    "Platform-Version": window.env.platform_Version,
    Authorization: sessionStorage.getItem("access_token"),
  };
  return config;
});

export const HorizonApi = horizonApi;
export const BackendApi = backendApi;
export const KuknosApi = kuknosApi;
