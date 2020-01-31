const router = require('koa-router')()
// const { userModel, wechatUserModel, qqUserModel } = require('../../../model/new_mobile/userModel')
const { sendFrontEnd, emailConfig } = require('../../../util/send')
const nodeMailer = require('nodemailer')

// const axios = require('axios');
// const bcrypt = require('bcryptjs');
// const { generateToken } = require('../../../util/generateToken')

router.post('/register',async ctx => {
  let {password,identity,email,code } = ctx.request.body;
        console.log(password,identity,email,code)
})

/* 处理验证码 */
router.post("/getcode", async ctx => {
  let { email,identity} = ctx.request.body;
  ctx.session.code  = null;

  /* 第三方登录邮箱 */
  let transporter = nodeMailer.createTransport({
    service: 'qq',
    auth: {
      pass:emailConfig.pass,
      user:emailConfig.user
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

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }else {
        ctx.session.code = emailConfig.code()
    }
  });

  ctx.body = sendFrontEnd({
    msg:identity === '2' ? '请联系管理员获取验证码' : '发送成功，稍后查看邮箱'
  })
})

module.exports = router
