const router = require('koa-router')()
const { userMode } = require('../../../model/user_model')
const { emailConfig, connectEmail, mailoptions } = require('../../../util/user')


/* 处理验证码 */
router.get("/getcode", async ctx => {
  let { email, identity } = ctx.query;
  ctx.session.code = null;
  let checkCode = emailConfig.code()

  let user = await userMode.findOne({ email })
  if (user) {
    ctx.body = ctx.state.sendFrontEnd(null, '当前邮箱已经注册过账户，请重新选择')
    return
  }

  let transporter = connectEmail();
  let mailOptions = {
    from: `"WEB" <${emailConfig.user}>`,
    to: email,
    subject: 'WEB前端提示您',
    html: `<b>本次验证码是${checkCode}</b>`
  };

  if (identity === '2') {
    mailOptions.to = '2979476667@qq.com'
    mailOptions.html = `<b>${email}用户 正在申请注册为老师，本次验证码是${checkCode}</b>`
  }

  ctx.session.code = await new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        reject(error)
        return console.log(error);
      } else {
        resolve(checkCode)
      }
    });
  })
  ctx.session.email = email
  ctx.body = ctx.state.sendFrontEnd({
    msg: identity === '2' ? '请联系管理员获取验证码' : '发送成功，稍后查看邮箱'
  })
})

/* 邮箱检查 */
router.post('/checkcode', async ctx => {
  let { email } = ctx.request.body
  let user = await userMode.findOne({ email })
  if (user) {
    ctx.session.code = null;
    let transporter = connectEmail();
    let checkCode = emailConfig.code()
    ctx.session.code = await new Promise((resolve, reject) => {
      transporter.sendMail(mailoptions(email, checkCode), (error, info) => {
        if (error) {
          reject(err)
          return console.log(error);
        } else {
          resolve(checkCode)
        }
      });
    })
    ctx.body = ctx.state.sendFrontEnd({
      msg: '发送成功，稍后查看邮箱'
    })
  } else {
    ctx.body = ctx.state.sendFrontEnd(null, '该邮箱没有注册')
  }
})

/*验证验证码是否正确 */
router.post("/matchcode", async ctx => {
  let { code } = ctx.request.body
  if (ctx.session.code == code) {
    ctx.body = ctx.state.sendFrontEnd({
      msg: '匹配成功'
    })
  } else {
    ctx.body = ctx.state.sendFrontEnd(null, '验证码错误')
  }
})


module.exports = router
