
/* 侧边栏数据获取 */
export const getSidebar = (axios, params) => {
  return axios.$get('/home/sidebar/list', {
    params
  })
}
