import axios from "axios";
import baseURL from "./baseURL";
import "./mock.js";

axios.defaults.baseURL = baseURL;

// 若需要，还可以进行二次封装。type 和 data 两个参数可以不传。
const request = (url, type = "GET", data = {}) => {
  const options = {
    url,
    method: type,
  };
  if (type.toLowerCase() === "get") {
    options.params = data;
  } else {
    options.data = data;
  }
  return new Promise((resolved, rejected) =>
    axios(options)
      .then((res) => {
        // console.log(res);
        resolved(res.data);
      })
      .catch((err) => {
        // console.log(err);
        rejected(err);
      })
  );
};

const http = axios.create();

http.defaults.timeout = 3000;

http.interceptors.request.use(
  (config) => {
    // 请求拦截器配置 // 可不配置
    // do sth
    return config;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

http.interceptors.response.use(
  (response) => {
    // 响应拦截器配置 // 可不配置
    // do something
    return response;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

export default request;
