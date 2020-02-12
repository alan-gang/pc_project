const router = require('koa-router')()
const { sidebarModel } = require('../../../model/home_model')
const fs = require('fs')
const path = require('path')
const jwt = require('koa-jwt')({ secret: 'hangang' });

// 用户登录
router.get('/list', async ctx => {
  ctx.body = ctx.query.title
  // let { password, name } = ctx.request.body;
  // let user = await userMode.findOne({ email: name })
  // if (!user) {
  //   ctx.body = ctx.state.sendFrontEnd(null, '该用户还未注册')
  //   return
  // } else {
  //   let checkStatus = await analysisPassword(password, user.password)
  //   if (!checkStatus) {
  //     ctx.body = ctx.state.sendFrontEnd(null, '密码错误')
  //     return
  //   } else {
  //     let token = await generateToken(user)
  //     ctx.session.user = user;
  //     ctx.body = ctx.state.sendFrontEnd({
  //       token,
  //       msg: '登录成功',
  //       user: user
  //     })
  //   }
  // }
})

module.exports = router
