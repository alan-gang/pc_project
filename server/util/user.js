const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
const nodeMailer = require('nodemailer')

let emailConfig = {
  pass: 'jcqmzmsporcvdghd',
  user: '2979476667@qq.com',
  code: () => Math.random().toString().substr(2, 4)
}

let mailoptions = (email) => {
  return {
    from: `"WEB" <${emailConfig.user}>`,
    to: email,
    subject: 'WEB前端提示您',
    html: `<b>本次验证码是${emailConfig.code()}</b>`
  }
}

let generateToken = async (data) => {
  const rules = JSON.parse(JSON.stringify(data))
  return await jwt.sign(rules, 'hangang', { expiresIn: 3600 * 24 })
}

let genertaePassword = async (password) => {
  let salt = await bcrypt.genSalt(10)
  return await bcrypt.hash(password, salt);
}

let analysisPassword = async (cuttentPassword, savePassword) => {
  return await bcrypt.compare(cuttentPassword, savePassword)
}

let connectEmail = () => {
  return nodeMailer.createTransport({
    service: 'qq',
    auth: {
      pass: emailConfig.pass,
      user: emailConfig.user
    }
  });
}

module.exports = {
  emailConfig, mailoptions, generateToken, genertaePassword, analysisPassword,
  connectEmail
}
