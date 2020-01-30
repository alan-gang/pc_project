import axios from 'axios'
import qs from 'qs';

// console.log(process.env.NODE_ENV);

// axios.defaults.baseURL = '/api';

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
// axios.defaults.headers.Authorization = sessionStorage.userToken

axios.interceptors.request.use(function (config) {
  config.data = qs.stringify(config.data)
  // if (sessionStorage.userToken) {
  //   config.headers.authorization = sessionStorage.userToken
  // }
  // config.withCredentials = true
  return config;
}, function (error) {
  return Promise.reject(error);
})

axios.interceptors.response.use(function (response) {
  return response.data;
}, function (error) {
  return Promise.reject(error);
})

export default function ({ params = null, url = '', type = 'get' }) {
  let data = (type == 'get' || type == 'delete') ? { params } : params;

  return new Promise((resolve, reject) => {
    axios[type](url, data).then(resolve).catch(reject)
  })
}
