export const state = () => ({
  isCollapse: false,
  sidebarList: []
})
export const mutations = {
  /* 控制测边栏宽度收缩 */
  changeSlider (state, status) {
    state.isCollapse = status
  },
  /* 填充侧边栏列表 */
  fillSidebar (state, list) {
    state.sidebarList = list
  }
}
