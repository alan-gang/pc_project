import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _34aa4579 = () => interopDefault(import('..\\pages\\404.vue' /* webpackChunkName: "pages_404" */))
const _2ade282b = () => interopDefault(import('..\\pages\\example.vue' /* webpackChunkName: "pages_example" */))
const _567970fc = () => interopDefault(import('..\\pages\\video.vue' /* webpackChunkName: "pages_video" */))
const _31026dff = () => interopDefault(import('..\\pages\\user\\login.vue' /* webpackChunkName: "pages_user_login" */))
const _080f767d = () => interopDefault(import('..\\pages\\user\\register.vue' /* webpackChunkName: "pages_user_register" */))
const _36719100 = () => interopDefault(import('..\\pages\\user\\resetpassword.vue' /* webpackChunkName: "pages_user_resetpassword" */))
const _215d423b = () => interopDefault(import('..\\pages\\user\\usersetting.vue' /* webpackChunkName: "pages_user_usersetting" */))
const _0ccc29e7 = () => interopDefault(import('..\\pages\\user\\usersetting\\index.vue' /* webpackChunkName: "pages_user_usersetting_index" */))
const _297f184c = () => interopDefault(import('..\\pages\\user\\usersetting\\avatarSetting.vue' /* webpackChunkName: "pages_user_usersetting_avatarSetting" */))
const _7e83c192 = () => interopDefault(import('..\\pages\\user\\usersetting\\userDetail.vue' /* webpackChunkName: "pages_user_usersetting_userDetail" */))
const _c065e7de = () => interopDefault(import('..\\pages\\user\\usersetting\\userMessage.vue' /* webpackChunkName: "pages_user_usersetting_userMessage" */))
const _5236fc5a = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'on',
  scrollBehavior,

  routes: [{
    path: "/404",
    component: _34aa4579,
    name: "404"
  }, {
    path: "/example",
    component: _2ade282b,
    name: "example"
  }, {
    path: "/video",
    component: _567970fc,
    name: "video"
  }, {
    path: "/user/login",
    component: _31026dff,
    name: "user-login"
  }, {
    path: "/user/register",
    component: _080f767d,
    name: "user-register"
  }, {
    path: "/user/resetpassword",
    component: _36719100,
    name: "user-resetpassword"
  }, {
    path: "/user/usersetting",
    component: _215d423b,
    children: [{
      path: "",
      component: _0ccc29e7,
      name: "user-usersetting"
    }, {
      path: "avatarSetting",
      component: _297f184c,
      name: "user-usersetting-avatarSetting"
    }, {
      path: "userDetail",
      component: _7e83c192,
      name: "user-usersetting-userDetail"
    }, {
      path: "userMessage",
      component: _c065e7de,
      name: "user-usersetting-userMessage"
    }]
  }, {
    path: "/",
    component: _5236fc5a,
    name: "index"
  }, {
    path: "*",
    component: _34aa4579,
    name: "custom"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
