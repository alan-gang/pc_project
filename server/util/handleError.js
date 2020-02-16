const { sendFrontEnd } = require('./send')


module.exports = () => {
  return async (ctx, next) => {
    try {
      await next();
    } catch (e) {
      let status = e.status || 401;
      let message = e.message || '服务器错误';
      ctx.body = sendFrontEnd(null, message)
    }
  }
}
