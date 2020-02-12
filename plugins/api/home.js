import ajax from './ajax'
/* 用户模块 */

/* 侧边栏数据获取 */
export const sidebar = (title) => ajax({
  url: '/home/sidebar/list',
  type: 'get',
  params: title
})
