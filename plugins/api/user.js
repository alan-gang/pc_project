import ajax from './ajax'
/* 用户模块 */

/* 获取验证码 */
export const getcode = (code) => ajax({
  url: '/user/useradmin/getcode',
  type: 'post',
  params: code
})

/* 注册用户 */
export const registerUser = (data) => ajax({
  url: '/user/useradmin/register',
  type: 'post',
  params: data
})

/* 用户登录 */
export const loginUser = (data) => ajax({
  url: '/user/useradmin/loginUser',
  type: 'post',
  params: data
})

/* 检验邮箱 */

export const checkCode = (data) => ajax({
  url: '/user/useradmin/checkcode',
  type: 'post',
  params: data
})

// 验证码是否正确
export const matchCode = (data) => ajax({
  url: '/user/useradmin/matchcode',
  type: 'post',
  params: data
})

//重置密码
export const resetPasswords = (data) => ajax({
  url: '/user/useradmin/resetPasswords',
  type: 'post',
  params: data
})

/* 获取加密密码公钥 */
export const getPublicKey = () => ajax({
  url: '/user/useradmin/getPublicKey',
})
