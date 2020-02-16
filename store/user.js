export const state = () => ({
    UserInfo: null,
})

export const mutations = {
    saveUserInfo(state, userInfo) {
        state.UserInfo = userInfo
            // console.log(state.UserInfo)
    }
}