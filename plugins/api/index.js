import ajax from './ajax'

/* 用户模块 */
export const getcode = (code) => ajax({
  url: '/user/useradmin/getcode',
  type: 'post',
  params: code
})

export const registerUser = (data) => ajax({
  url: '/user/useradmin/register',
  type: 'post',
  params: data
})

export const loginUser = (data) => ajax({
  url: '/user/useradmin/loginUser',
  type: 'post',
  params: data
})
