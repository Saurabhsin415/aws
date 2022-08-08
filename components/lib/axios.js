import axios from "axios";

import { getToken } from "./get-token";

const http = axios.create({
  baseURL:'https://api.xn--sattmatka-t1a.com/api/',
  timeout: 30000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

// Change request data/error here
http.interceptors.request.use(
  (config) => {
    const token = getToken();
    // console.log(token);
    config.headers = {
      ...config.headers,
      Authorization: `Bearer ${token ? token : ""}`,
      // Authorization: `Bearer 3|Uj68Z74WAEJDrKKwENlKuHGe22doYSfFXuiGhX1z`,
          // Authorization:token,
    };
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default http;

 