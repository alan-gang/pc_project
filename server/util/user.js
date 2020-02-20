const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
const nodeMailer = require('nodemailer')
const fs = require('fs')
const path = require('path')
const JSEncrypt = require('node-jsencrypt')
const SMSClient = require('@alicloud/sms-sdk')

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

/* 生成jwt验证规则 */
let generateToken = async (data) => {
  const rules = JSON.parse(JSON.stringify(data))
  return await jwt.sign(rules, 'hangang', { expiresIn: 3600 * 24 })
}

/* 密码加密 */
let genertaePassword = async (password) => {
  let frontEndPassword = deCode(password)
  let salt = await bcrypt.genSalt(10)
  return await bcrypt.hash(frontEndPassword, salt);
}

/* 密码解密 */
let deCode = (password) => {
  const _priKey = fs.readFileSync(path.resolve(__dirname, '../config/keyConfig/private.pem'));
  let jsencrypt = new JSEncrypt()
  jsencrypt.setPrivateKey(_priKey.toString())
  return jsencrypt.decrypt(password)
}

/* 解析前端密码 */
let analysisPassword = async (frontEndPassword, savePassword) => {
  let analysisPassword = deCode(frontEndPassword)
  return await bcrypt.compare(analysisPassword, savePassword)
}

/* qq邮箱连接规则 */
let connectEmail = () => {
  return nodeMailer.createTransport({
    service: 'qq',
    auth: {
      pass: emailConfig.pass,
      user: emailConfig.user
    }
  });
}

/* 生成手机号码发送验证规则 */

let generatorMobileCode = () => {
  const accessKeyId = 'LTAI4FbhrxcXRo18ib9LPYtM'
  const secretAccessKey = 'IgWjvrRsc4i9YMZ64UotaLtTlMXQfp'
  return new SMSClient({ accessKeyId, secretAccessKey })
}


module.exports = {
  emailConfig, mailoptions, analysisPassword, generateToken, genertaePassword,
  connectEmail, generatorMobileCode
}
