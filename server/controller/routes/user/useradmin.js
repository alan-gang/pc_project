const router = require('koa-router')()
const { userMode } = require('../../../model/user_model')
const { sendFrontEnd } = require('../../../util/send')
const { emailConfig, generateToken, genertaePassword } = require('../../../util/user')
const nodeMailer = require('nodemailer')
// const axios = require('axios');

// 用户登录
router.post('/loginUser', async ctx => {
  let { password, email } = ctx.request.body;

  let user = await userMode.findOne({ email })

    if(!user) {
      ctx.body = sendFrontEnd(null,'该用户还未注册')
      return
    }else {
      let checkStatus = analysisPassword(password, user.password)
          if(!checkStatus) {
            ctx.body = sendFrontEnd(null, '密码错误')
            return
          }
    }

  password = await genertaePassword(password)
  let saveStatus = await userMode.create({ password, email })
  let token = await generateToken(saveStatus);

  ctx.body = sendFrontEnd({
    token,
    msg: '注册成功'
  })
})


// 用户注册
router.post('/register', async ctx => {
  let { password, identity, email, code } = ctx.request.body;
  if (code != ctx.session.code) {
    ctx.body = sendFrontEnd(null, '对不起，验证码不正确')
  }
  let hasEmail = await userMode.findOne({ email })
  if (hasEmail) {
    ctx.body = sendFrontEnd(null, '对不起，邮箱已经被注册')
    return
  }

  password = await genertaePassword(password)
  let saveStatus = await userMode.create({ password, email, identity })
  let token = await generateToken(saveStatus);

  ctx.body = sendFrontEnd({
    token,
    msg: '注册成功'
  })
})

/* 处理验证码 */
router.post("/getcode", async ctx => {
  let { email, identity } = ctx.request.body;
  ctx.session.code = null;

  /* 第三方登录邮箱 */
  let transporter = nodeMailer.createTransport({
    service: 'qq',
    auth: {
      pass: emailConfig.pass,
      user: emailConfig.user
    }
  });

  let mailOptions = {
    from: `"WEB" <${emailConfig.user}>`,
    to: email,
    subject: 'WEB前端提示您',
    html: `<b>本次验证码是${emailConfig.code()}</b>`
  };

  if (identity === '2') {
    mailOptions.to = '2979476667@qq.com'
    mailOptions.html = `<b>${email}用户 正在申请注册为老师，本次验证码是${emailConfig.code()}</b>`
  }

  ctx.session.code = await new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        reject(err)
        return console.log(error);
      } else {
        resolve(emailConfig.code())
      }
    });
  })

  ctx.body = sendFrontEnd({
    msg: identity === '2' ? '请联系管理员获取验证码' : '发送成功，稍后查看邮箱'
  })
})

module.exports = router
