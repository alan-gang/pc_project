const { sendFrontEnd, resolve } = require('./send')

module.exports = () => {
  return async(ctx,next) => {
    ctx.state.sendFrontEnd = sendFrontEnd
    ctx.state.resolve = resolve
    await next()
  }
}
