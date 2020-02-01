const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')


module.exports = {
  emailConfig: {
    pass: 'jcqmzmsporcvdghd',
    user: '2979476667@qq.com',
    code: () => Math.random().toString().substr(2, 4)
  },
  async generateToken (data) {
    const rules = JSON.parse(JSON.stringify(data))
    return await jwt.sign(rules, 'hangang', { expiresIn: 3600 * 24 })
  },
  async genertaePassword(password) {
    let salt = await bcrypt.genSalt(10)
    return  await bcrypt.hash(password, salt);
  },
  async analysisPassword(cuttentPassword,savePassword) {
    await bcrypt.compare(cuttentPassword, savePassword)
  }


}
