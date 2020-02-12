module.exports = {
  async matchcode (ctx) {
    if (ctx.session.code == code) {
      ctx.body = sendFrontEnd({
        msg: '匹配成功'
      })
    } else {
      ctx.body = sendFrontEnd(null, '验证码错误')
    }
  }
}
