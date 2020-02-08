export const state = () => ({
  counter: 0
})

export const mutations = {
  changeSlider (state,status) {

    state.counter++
  }
}
