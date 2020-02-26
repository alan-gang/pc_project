import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _fb04af6e = () => interopDefault(import('..\\pages\\404.vue' /* webpackChunkName: "pages_404" */))
const _70b8ba0a = () => interopDefault(import('..\\pages\\example.vue' /* webpackChunkName: "pages_example" */))
const _7cff5fcc = () => interopDefault(import('..\\pages\\video.vue' /* webpackChunkName: "pages_video" */))
const _b423fe62 = () => interopDefault(import('..\\pages\\user\\login.vue' /* webpackChunkName: "pages_user_login" */))
const _2a0131ad = () => interopDefault(import('..\\pages\\user\\register.vue' /* webpackChunkName: "pages_user_register" */))
const _0f4553d0 = () => interopDefault(import('..\\pages\\user\\resetpassword.vue' /* webpackChunkName: "pages_user_resetpassword" */))
const _42e3790b = () => interopDefault(import('..\\pages\\user\\usersetting.vue' /* webpackChunkName: "pages_user_usersetting" */))
const _2ef1a917 = () => interopDefault(import('..\\pages\\user\\usersetting\\index.vue' /* webpackChunkName: "pages_user_usersetting_index" */))
const _37189e07 = () => interopDefault(import('..\\pages\\user\\usersetting\\userDetail.vue' /* webpackChunkName: "pages_user_usersetting_userDetail" */))
const _167b317e = () => interopDefault(import('..\\pages\\user\\usersetting\\userMessage.vue' /* webpackChunkName: "pages_user_usersetting_userMessage" */))
const _052b1eba = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

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
    component: _fb04af6e,
    name: "404"
  }, {
    path: "/example",
    component: _70b8ba0a,
    name: "example"
  }, {
    path: "/video",
    component: _7cff5fcc,
    name: "video"
  }, {
    path: "/user/login",
    component: _b423fe62,
    name: "user-login"
  }, {
    path: "/user/register",
    component: _2a0131ad,
    name: "user-register"
  }, {
    path: "/user/resetpassword",
    component: _0f4553d0,
    name: "user-resetpassword"
  }, {
    path: "/user/usersetting",
    component: _42e3790b,
    children: [{
      path: "",
      component: _2ef1a917,
      name: "user-usersetting"
    }, {
      path: "userDetail",
      component: _37189e07,
      name: "user-usersetting-userDetail"
    }, {
      path: "userMessage",
      component: _167b317e,
      name: "user-usersetting-userMessage"
    }]
  }, {
    path: "/",
    component: _052b1eba,
    name: "index"
  }, {
    path: "*",
    component: _fb04af6e,
    name: "custom"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
