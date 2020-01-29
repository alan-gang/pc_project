// import { getCookie, setCookie } from '@/pages/logreg/api/cookie'
// import axios from 'axios'


export default ({ app, store }) => {

  app.router.beforeEach((to, from, next) => {
    if (process.client) {
      // let userInfo = localStorage.userInfo;
      // if(!to.path.includes('/user') && !userInfo) {
      //   next('/user/login')
      // }else  {
      //   next()
      // }
    }
    next()
  })
}
