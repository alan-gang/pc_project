const router = require('koa-router')()
const { userMode } = require('../../../model/user_model')
const { sendFrontEnd } = require('../../../util/send')
const { emailConfig, generateToken, genertaePassword, analysisPassword, connectEmail, mailoptions } = require('../../../util/user')
const nodeMailer = require('nodemailer')
// const axios = require('axios');

// 用户登录
router.post('/loginUser', async ctx => {
  let { password, name } = ctx.request.body;

  let user = await userMode.findOne({ email:name })

    if(!user) {
      ctx.body = sendFrontEnd(null,'该用户还未注册')
      return
    }else {
      let checkStatus =await analysisPassword(password, user.password)
          if(!checkStatus) {
            ctx.body = sendFrontEnd(null, '密码错误')
            return
          }else {
              let token = await generateToken(user);
              ctx.session.email = name;
              ctx.body = sendFrontEnd({
                  token,
                  msg: '登录成功'
              })
          }
    }
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
  ctx.session.email = email;
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
  let transporter = connectEmail();
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
        reject(error)
        return console.log(error);
      } else {
        resolve(emailConfig.code())
      }
    });
  })
//   console.log(ctx.session.code)
  ctx.body = sendFrontEnd({
    msg: identity === '2' ? '请联系管理员获取验证码' : '发送成功，稍后查看邮箱'
  })
})

/* 邮箱检查 */
router.post('/checkcode',async ctx => {
  let {email} = ctx.request.body
  let user = await userMode.findOne({ email })
  if(user) {
    ctx.session.code = null;
    let transporter = connectEmail();
    console.log(transporter)
    ctx.session.code = await new Promise((resolve, reject) => {
      transporter.sendMail(mailoptions(email), (error, info) => {
        if (error) {
          reject(err)
          return console.log(error);
        } else {
            // console.log(info)
          resolve(emailConfig.code())
        }
      });
    })
    //   console.log(ctx.session.code)
    ctx.body = sendFrontEnd({msg:'发送成功，稍后查看邮箱'
    })
  }else {
    ctx.body = sendFrontEnd(null, '该邮箱没有注册')
  }
})

/*验证验证码是否正确 */ 
router.post("/matchcode",async ctx =>{
    let { code } = ctx.request.body
    // console.log(code,ctx.session.code)
    if(ctx.session.code==code) {
         ctx.body = sendFrontEnd({
            msg: '匹配成功'
        })
    }else {
        ctx.body = sendFrontEnd(null, '验证码错误')
    }
})

module.exports = router
