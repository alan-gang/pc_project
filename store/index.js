export const state = () => ({
  loadingMasker: false
})

export const mutations = {
  changLoadingMasker (state, status) {
    state.loadingMasker = status
  }
}
