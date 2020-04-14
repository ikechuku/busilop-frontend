import axios from "axios";

const instance = axios.create({});

instance.interceptors.request.use(config => {
  return config;
});

instance.interceptors.response.use(
  response => (response),
  error =>( Promise.reject(error))
  
);

export default instance;
