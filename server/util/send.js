module.exports = {
  sendFrontEnd (data, message) {
    if (data) {
      return {
        code: 0,
        data
      }
    } else {
      return {
        code: 1,
        message: message
      }
    }
  },
  emailConfig:{
    pass:'jcqmzmsporcvdghd',
    user:'2979476667@qq.com',
    code:Math.random().toString().substr(2,4)
  }
}
