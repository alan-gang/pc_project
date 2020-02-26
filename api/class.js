import ajax from './ajax'

/* 获取验证码 */
export const getClassList = () => ajax({
  url: '/class/classInfo/getClassNameLists'
})
