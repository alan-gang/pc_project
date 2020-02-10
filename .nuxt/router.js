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
const _46d49fd3 = () => interopDefault(import('..\\pages\\user\\userinfo.vue' /* webpackChunkName: "pages_user_userinfo" */))
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
  linkExactActiveClass: 'nuxt-link-exact-active',
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
    path: "/user/userinfo",
    component: _46d49fd3,
    name: "user-userinfo"
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
