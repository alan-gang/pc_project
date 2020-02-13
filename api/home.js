export const sidebar = (title) => ajax({
  url: '/home/sidebar/list',
  type: 'get',
  params: title
})

/* 侧边栏数据获取 */
export const getSidebar = (axios, params) => {
  return axios.$get('/home/sidebar/list', {
    params
  })
}
