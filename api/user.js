import ajax from './ajax'
/* 用户模块 */

/* 获取验证码 */
export const getcode = (code) => ajax({
  url: '/user/handleEmail/getcode',
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
  params: data,
  config: {
    isLoading: true
  }
})

/* 检验邮箱 */
export const checkCode = (data) => ajax({
  url: '/user/handleEmail/checkcode',
  type: 'post',
  params: data
})

// 验证码是否正确
export const matchCode = (data) => ajax({
  url: '/user/handleEmail/matchcode',
  type: 'post',
  params: data
})

//重置密码
export const resetPasswords = (data) => ajax({
  url: '/user/useradmin/resetPasswords',
  type: 'post',
  params: data
})

/* 用户退出 */
export const signOut = () => ajax({
  url: '/user/useradmin/signOut',
  type: 'post',
  config: {
    isLoading: true
  }
})

/* 服务端获取用户内容 */
export const initUser = (axios) => {
  return axios.$get('/user/useradmin/initUser')
}
