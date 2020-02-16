<template>
  <div>
    <transition name="el-fade-in"
                mode="out-in">
      <nuxt-child />
    </transition>
  </div>
</template>

<script>
import { getSidebar, initUser } from '~/api'
import { mapState, mapActions } from 'vuex'

export default {
  async fetch ({ store, $axios }) {
    let { sidebarList } = await getSidebar($axios, { title: 'userSetting' })
    store.commit('home/fillSidebar', sidebarList)
    if (!process.client) {
      let { user } = await initUser($axios)
      store.commit('user/saveUserInfo', user)
    }
  },
  watch: {
    async $route (url) {
      if (url.path.includes('usersetting') && this.sidebarList.title != 'userSetting') {
        const { data: { sidebarList } } = await getSidebar($axios, { title: 'userSetting' })
        store.commit('home/fillSidebar', sidebarList)
      }
    }
  },
  data () {
    return {
      msg: ''
    }
  },
  methods: {
  },
  computed: {
    ...mapState({
      sidebarList: (state) => state.home.sidebarList
    })
  }
}
</script>

<style scoped>
</style>
