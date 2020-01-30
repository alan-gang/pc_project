const router = require('koa-router')()
// const { userModel, wechatUserModel, qqUserModel } = require('../../../model/new_mobile/userModel')
const { sendFrontEnd, emailConfig } = require('../../../util/send')
const nodeMailer = require('nodemailer')

// const axios = require('axios');
// const bcrypt = require('bcryptjs');
// const { generateToken } = require('../../../util/generateToken')

/* 处理验证码 */
router.post("/getcode", async ctx => {
  let { email} = ctx.request.body;

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
    html: `<b>本次验证码是${emailConfig.code}</b>`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }else {
      ctx.session.code = emailConfig.code
    }
  });
  ctx.body = sendFrontEnd({
    msg:'发送成功,稍后请查看邮箱'
  })
})

module.exports = router
