const router = require('koa-router')()
const { userMode } = require('../../../model/user_model')
const { generatorMobileCode } = require('../../../util/user')
const jwt = require('koa-jwt')({ secret: 'hangang' });


/* 用户手机号码绑定时候获取进行手机验证码接收 */
router.get("/getMobileCode", jwt, async ctx => {
  let { mobile } = ctx.query;

  let user = await userMode.findOne({ mobile })

  if (user) {
    ctx.body = ctx.state.sendFrontEnd(null, '当前手机号码已经被其他用户绑定，请重试')
    return
  }

  let mobileCode = Math.random().toString().substr(2, 6)

  //发送短信
  let res = await generatorMobileCode().sendSMS({
    PhoneNumbers: mobile, //必填: 待发送手机号。支持以逗号分隔的形式进行批量调用，批量上限为1000个手机号码,
    SignName: 'WEB前端学院', //必填: 短信签名 - 可在短信控制台中找到
    TemplateCode: 'SMS_183793214',  // 必填: 短信模板 - 可在短信控制台中找
    TemplateParam: `{"code":"${mobileCode}"}`
  })


  if (res.Code == 'OK') {
    ctx.session.mobileCode = mobileCode
    ctx.body = ctx.state.sendFrontEnd({ msg: '发送成功，请在手机查看' })
    ctx.session.user.mobile = mobile
  } else {
    ctx.body = ctx.state.sendFrontEnd(null, '发送失败，请稍后重试')
  }
})


module.exports = router
