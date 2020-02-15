import qs from 'qs'

export default function ({ $axios, redirect, app }, inject, ) {
  let env = process.env.NODE_ENV == 'production' ? 'https://lehu.hyfarsight.com/' : 'http://localhost:5000'
  $axios.setBaseURL(env)
  $axios.setHeader('Content-Type', 'application/x-www-form-urlencoded', ['post'])

  $axios.onRequest(config => {
    config.data = qs.stringify(config.data)
    if (process.client) {
      if (sessionStorage.token) {
        config.headers.common['Authorization'] = 'Bearer ' + sessionStorage.token;
      }
    } else {
      config.headers.common['Authorization'] = 'Bearer ' + app.context.req.ctx.session.token;
    }
    return config
  })

  $axios.onResponse(response => {
    return response.data
  })

}
