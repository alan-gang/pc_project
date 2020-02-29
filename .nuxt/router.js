import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _34aa4579 = () => interopDefault(import('..\\pages\\404.vue' /* webpackChunkName: "pages_404" */))
const _2ade282b = () => interopDefault(import('..\\pages\\example.vue' /* webpackChunkName: "pages_example" */))
const _fd7bb2bc = () => interopDefault(import('..\\pages\\forum.vue' /* webpackChunkName: "pages_forum" */))
const _0a45fa00 = () => interopDefault(import('..\\pages\\forum\\forumdetail.vue' /* webpackChunkName: "pages_forum_forumdetail" */))
const _3c7e6326 = () => interopDefault(import('..\\pages\\forum\\forumlist\\_forumList.vue' /* webpackChunkName: "pages_forum_forumlist__forumList" */))
const _567970fc = () => interopDefault(import('..\\pages\\video.vue' /* webpackChunkName: "pages_video" */))
const _31026dff = () => interopDefault(import('..\\pages\\user\\login.vue' /* webpackChunkName: "pages_user_login" */))
const _080f767d = () => interopDefault(import('..\\pages\\user\\register.vue' /* webpackChunkName: "pages_user_register" */))
const _36719100 = () => interopDefault(import('..\\pages\\user\\resetpassword.vue' /* webpackChunkName: "pages_user_resetpassword" */))
const _215d423b = () => interopDefault(import('..\\pages\\user\\usersetting.vue' /* webpackChunkName: "pages_user_usersetting" */))
const _0ccc29e7 = () => interopDefault(import('..\\pages\\user\\usersetting\\index.vue' /* webpackChunkName: "pages_user_usersetting_index" */))
const _7e83c192 = () => interopDefault(import('..\\pages\\user\\usersetting\\userDetail.vue' /* webpackChunkName: "pages_user_usersetting_userDetail" */))
const _c065e7de = () => interopDefault(import('..\\pages\\user\\usersetting\\userMessage.vue' /* webpackChunkName: "pages_user_usersetting_userMessage" */))

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
    path: "/forum",
    component: _fd7bb2bc,
    name: "forum",
    children: [{
      path: "forumdetail",
      component: _0a45fa00,
      name: "forum-forumdetail"
    }, {
      path: "forumlist/:forumList?",
      component: _3c7e6326,
      name: "forum-forumlist-forumList"
    }]
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
      path: "userDetail",
      component: _7e83c192,
      name: "user-usersetting-userDetail"
    }, {
      path: "userMessage",
      component: _c065e7de,
      name: "user-usersetting-userMessage"
    }]
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
