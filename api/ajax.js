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
  /* 是否有loading状态 */
  if (response.config.isLoading) {
    const store = $nuxt.$store
    store.commit('changLoadingMasker', false)
  }

  /* 处理省市区三级联动菜单 */
  if (response.data.msg == 'ok') {
    response.data.code = 0;
  }

  /* 请求错误处理内容 */
  if (response.data.code !== 0) {
    let message = response.data.message
    if (response.data.status == 401) {
      $nuxt.$alert(message, '温馨提示', {
        confirmButtonText: '确定',
        type: 'warning',
        callback: () => {
          $nuxt.$router.replace('/user/login')
        }
      })
    } else {
      $nuxt.$message({
        message,
        type: 'warning',
        duration: 2000
      })
    }
  }
  return response.data;
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
