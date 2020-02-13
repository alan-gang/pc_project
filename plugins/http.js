
export default function ({ $axios, redirect, app }, inject, ) {
  process.env.NODE_ENV == 'production' ? '//lehu.hyfarsight.com/' : '//localhost:5000'
  $axios.setHeader('Content-Type', 'application/x-www-form-urlencoded', ['post'])
  $axios.onRequest(config => {
    if (process.client) {
      if (sessionStorage.token) {
        config.headers.common['Authorization'] = 'Bearer ' + sessionStorage.token;
      }
    } else {
      config.headers.common['Authorization'] = 'Bearer ' + app.context.req.ctx.session.token;
    }
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
