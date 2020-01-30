import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _5bfb1b11 = () => interopDefault(import('..\\pages\\404.vue' /* webpackChunkName: "pages_404" */))
const _27cb1c7a = () => interopDefault(import('..\\pages\\example.vue' /* webpackChunkName: "pages_example" */))
const _26297ed8 = () => interopDefault(import('..\\pages\\video.vue' /* webpackChunkName: "pages_video" */))
const _01502b97 = () => interopDefault(import('..\\pages\\user\\login.vue' /* webpackChunkName: "pages_user_login" */))
const _e25c9c36 = () => interopDefault(import('..\\pages\\user\\register.vue' /* webpackChunkName: "pages_user_register" */))
const _64d2498a = () => interopDefault(import('..\\pages\\user\\userinfo.vue' /* webpackChunkName: "pages_user_userinfo" */))
const _6d56516b = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

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
    component: _5bfb1b11,
    name: "404"
  }, {
    path: "/example",
    component: _27cb1c7a,
    name: "example"
  }, {
    path: "/video",
    component: _26297ed8,
    name: "video"
  }, {
    path: "/user/login",
    component: _01502b97,
    name: "user-login"
  }, {
    path: "/user/register",
    component: _e25c9c36,
    name: "user-register"
  }, {
    path: "/user/userinfo",
    component: _64d2498a,
    name: "user-userinfo"
  }, {
    path: "/",
    component: _6d56516b,
    name: "index"
  }, {
    path: "*",
    component: _5bfb1b11,
    name: "custom"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
