export const state = () => ({
  isCollapse: false
})

export const mutations = {
  changeSlider (state, status) {
    state.isCollapse = status
  },
}
