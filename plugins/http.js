import qs from 'qs';

export default function ({ $axios, redirect, app }, inject, ) {
  // $axios.setBaseURL('http://localhost:5000')
  $axios.setHeader('Content-Type', 'application/x-www-form-urlencoded', ['post'])
  $axios.onRequest(config => {
    if(process.client) {
      if (sessionStorage.token) {
        config.headers.common['Authorization'] = 'Bearer ' + sessionStorage.token;
      }
    }else {
      config.headers.common['Authorization'] = 'Bearer ' + app.context.req.ctx.session.token;
    }
    config.data = qs.stringify(config.data)
    console.log(config)
  })

    return ({ params = null, url = '', type = 'get' }) => {
      let data = (type == 'get' || type == 'delete') ? { params } : params;
      return new Promise((resolve, reject) => {
        $axios[type](url, data).then(resolve).catch(reject)
      })
    }
  // $axios.onResponse(response => {
  //   console.log(response.data)
  //   return response.data
  // })

  // $axios.onError(error => {
  //   const code = parseInt(error.response && error.response.status)
  //   if (code === 400) {
  //     redirect('/400')
  //   }
  // })
}
