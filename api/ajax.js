import axios from 'axios'
import qs from 'qs'

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.interceptors.request.use(function (config) {
  if (config.isLoading) {
    const store = $nuxt.$store
    store.commit('changLoadingMasker', true)
  }
  config.data = qs.stringify(config.data)
  if (sessionStorage.token) {
    config.headers.common['Authorization'] = 'Bearer ' + sessionStorage.token;
  }
  config.withCredentials = true
  return config;
}, function (error) {
  return Promise.reject(error);
})

axios.interceptors.response.use(function (response) {

  if (response.config.isLoading) {
    const store = $nuxt.$store
    store.commit('changLoadingMasker', false)
  }
  if (response.data.message === 'Authentication Error') {
    const router = $nuxt.$router
    router.replace('/user/login')
  }else {
  return response.data;
  }
}, function (error) {
  return Promise.reject(error);
})

export default function ({ params = null, url = '', type = 'get', config = {} }) {
  let arr = [];
  if ((type === 'get' || type === 'delete')) {
    if (params) {
      url += `?${qs.stringify(params)}`
    }
    arr.push(config)
  } else {
    params ? arr.push(params, config) : arr.push({}, config)
  }
  return new Promise((resolve, reject) => {
    axios[type](url, ...arr).then(resolve).catch(reject)
  })
}
