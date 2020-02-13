const router = require('koa-router')()
const { sidebarModel } = require('../../../model/home_model')
const fs = require('fs')
const path = require('path')
const jwt = require('koa-jwt')({ secret: 'hangang' });

// 用户登录
router.get('/list', jwt, async ctx => {
  let { title } = ctx.query

  let sidebarList = await sidebarModel.findOne({ title })
  ctx.body = ctx.state.sendFrontEnd({
    sidebarList
  })
})

module.exports = router
