import ajax from './ajax'

/* 用户模块 */
export const getcode = (code) => ajax({
  url: '/user/useradmin/getcode',
  type: 'post',
  params: code
})
