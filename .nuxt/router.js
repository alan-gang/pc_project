import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _0f30bf78 = () => interopDefault(import('..\\pages\\404.vue' /* webpackChunkName: "pages_404" */))
const _09898aaa = () => interopDefault(import('..\\pages\\example.vue' /* webpackChunkName: "pages_example" */))
const _ad6d318a = () => interopDefault(import('..\\pages\\video.vue' /* webpackChunkName: "pages_video" */))
const _2e2a78fe = () => interopDefault(import('..\\pages\\user\\login.vue' /* webpackChunkName: "pages_user_login" */))
const _1ee7171e = () => interopDefault(import('..\\pages\\user\\register.vue' /* webpackChunkName: "pages_user_register" */))
const _5dac4074 = () => interopDefault(import('..\\pages\\user\\userinfo.vue' /* webpackChunkName: "pages_user_userinfo" */))
const _29b47812 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

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
    component: _0f30bf78,
    name: "404"
  }, {
    path: "/example",
    component: _09898aaa,
    name: "example"
  }, {
    path: "/video",
    component: _ad6d318a,
    name: "video"
  }, {
    path: "/user/login",
    component: _2e2a78fe,
    name: "user-login"
  }, {
    path: "/user/register",
    component: _1ee7171e,
    name: "user-register"
  }, {
    path: "/user/userinfo",
    component: _5dac4074,
    name: "user-userinfo"
  }, {
    path: "/",
    component: _29b47812,
    name: "index"
  }, {
    path: "*",
    component: _0f30bf78,
    name: "custom"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
