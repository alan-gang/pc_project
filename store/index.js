export const state = () => ({
  loadingMasker: false
})

export const mutations = {
  changLoadingMasker (state, status) {
    state.loadingMasker = status
  }
}

// 当页面（组件）没有加载之前获取服务端的数据 进行客户端的填充（页面没加载之前store里面已经有了数据了）
export const actions = {
  nuxtServerInit ({ commit }, { req }) {
    if (req.ctx.session.user)
      commit('user/saveUserInfo', req.ctx.session.user)
  }
}
