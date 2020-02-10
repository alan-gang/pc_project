const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
const nodeMailer = require('nodemailer')
const fs = require('fs')
const path = require('path')
const JSEncrypt = require('node-jsencrypt')

let emailConfig = {
  pass: 'jcqmzmsporcvdghd',
  user: '2979476667@qq.com',
  code: () => Math.random().toString().substr(2, 4)
}

let mailoptions = (email, checkCode) => {
  return {
    from: `"WEB" <${emailConfig.user}>`,
    to: email,
    subject: 'WEB前端提示您',
    html: `<b>本次验证码是${checkCode}</b>`
  }
}

let generateToken = async (data) => {
  const rules = JSON.parse(JSON.stringify(data))
  return await jwt.sign(rules, 'hangang', { expiresIn: 3600 * 24 })
}

let genertaePassword = async (password) => {
  let frontEndPassword = deCode(password)
  let salt = await bcrypt.genSalt(10)
  return await bcrypt.hash(frontEndPassword, salt);
}

let deCode = (password) => {
  const _priKey = fs.readFileSync(path.resolve(__dirname, '../config/keyConfig/private.pem'));
  let jsencrypt = new JSEncrypt()
  jsencrypt.setPrivateKey(_priKey.toString())
  return jsencrypt.decrypt(password)
}

let analysisPassword = async (frontEndPassword, savePassword) => {
   let analysisPassword = deCode(frontEndPassword)
  return await bcrypt.compare(analysisPassword, savePassword)
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
  emailConfig, mailoptions, analysisPassword, generateToken, genertaePassword,
  connectEmail
}
