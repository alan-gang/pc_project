export const state = () => ({
  UserInfo: null,
  isShowTeacherFom: false
})

export const mutations = {
  saveUserInfo (state, userInfo) {
    state.UserInfo = userInfo
  },
  /* 是否弹出老师对话框 */
  showTeacherForm (state, status) {
    console.log(status)
    state.isShowTeacherFom = status
  }
}
