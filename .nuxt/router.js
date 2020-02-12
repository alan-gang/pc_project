import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _df312f4a = () => interopDefault(import('..\\pages\\404.vue' /* webpackChunkName: "pages_404" */))
const _4bab0a0d = () => interopDefault(import('..\\pages\\example.vue' /* webpackChunkName: "pages_example" */))
const _910d3944 = () => interopDefault(import('..\\pages\\video.vue' /* webpackChunkName: "pages_video" */))
const _7ae78ee1 = () => interopDefault(import('..\\pages\\user\\login.vue' /* webpackChunkName: "pages_user_login" */))
const _46fd125b = () => interopDefault(import('..\\pages\\user\\register.vue' /* webpackChunkName: "pages_user_register" */))
const _3da0afe2 = () => interopDefault(import('..\\pages\\user\\resetpassword.vue' /* webpackChunkName: "pages_user_resetpassword" */))
const _262ab19d = () => interopDefault(import('..\\pages\\user\\usersetting.vue' /* webpackChunkName: "pages_user_usersetting" */))
const _43f1ef76 = () => interopDefault(import('..\\pages\\user\\usersetting\\index.vue' /* webpackChunkName: "pages_user_usersetting_index" */))
const _37e47435 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

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
    component: _df312f4a,
    name: "404"
  }, {
    path: "/example",
    component: _4bab0a0d,
    name: "example"
  }, {
    path: "/video",
    component: _910d3944,
    name: "video"
  }, {
    path: "/user/login",
    component: _7ae78ee1,
    name: "user-login"
  }, {
    path: "/user/register",
    component: _46fd125b,
    name: "user-register"
  }, {
    path: "/user/resetpassword",
    component: _3da0afe2,
    name: "user-resetpassword"
  }, {
    path: "/user/usersetting",
    component: _262ab19d,
    children: [{
      path: "",
      component: _43f1ef76,
      name: "user-usersetting"
    }]
  }, {
    path: "/",
    component: _37e47435,
    name: "index"
  }, {
    path: "*",
    component: _df312f4a,
    name: "custom"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
