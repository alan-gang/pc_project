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
