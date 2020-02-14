const router = require('koa-router')()
const { userMode } = require('../../../model/user_model')
const {  generateToken, genertaePassword, analysisPassword } = require('../../../util/user')
const fs = require('fs')
const path = require('path')
const jwt = require('koa-jwt')({ secret: 'hangang' });

// 用户登录
router.post('/loginUser', async ctx => {
  let { password, name } = ctx.request.body;
  let user = await userMode.findOne({ email: name })
  if (!user) {
    ctx.body = ctx.state.sendFrontEnd(null, '该用户还未注册')
    return
  } else {
    let checkStatus = await analysisPassword(password, user.password)
    if (!checkStatus) {
      ctx.body = ctx.state.sendFrontEnd(null, '密码错误')
      return
    } else {
      let token = await generateToken(user)
      ctx.session.user = user;
      ctx.session.token = token
      ctx.body = ctx.state.sendFrontEnd({
        token,
        msg: '登录成功',
        user: user
      })
    }
  }
})

// 用户注册
router.post('/register', async ctx => {
  let { password, identity, email, code } = ctx.request.body;
  if (code != ctx.session.code) {
    ctx.body = ctx.state.sendFrontEnd(null, '对不起，验证码不正确')
    return
  }
  let hasEmail = await userMode.findOne({ email })
  if (hasEmail) {
    ctx.body = ctx.state.sendFrontEnd(null, '对不起，邮箱已经被注册')
    return
  }
  password = await genertaePassword(password)
  let saveStatus = await userMode.create({ password, email, identity })
  let token = await generateToken(saveStatus);
  ctx.session.user = saveStatus;
  ctx.session.token = token
  ctx.body = ctx.state.sendFrontEnd({
    token,
    msg: '注册成功',
    user: saveStatus
  })
})

/*重置密码 */
router.post("/resetPasswords", async ctx => {
  let { password, email } = ctx.request.body
  password = await genertaePassword(password)
  let updateStatus = await userMode.updateOne({ email }, { password })
  if (updateStatus.n > 0) {
    ctx.body = ctx.state.sendFrontEnd({ msg: '恭喜你，修改密码成功' })
  }
})

/* 用户退出 */
router.post('/signOut', jwt, async ctx => {
  ctx.session.user = null
  ctx.session.token = null
  ctx.body = ctx.state.sendFrontEnd({ msg: '退出成功' })
})

module.exports = router
