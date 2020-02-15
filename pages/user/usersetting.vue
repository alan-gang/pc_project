<template>
  <div>
    <transition name="el-fade-in"
                mode="out-in">
      <nuxt-child />
    </transition>
  </div>
</template>

<script>
import { getSidebar } from '~/api'
import { mapState } from 'vuex'
export default {
  async fetch ({ store, $axios }) {
    const {  sidebarList  } = await getSidebar($axios, { title: 'userSetting' })
    store.commit('home/fillSidebar', sidebarList)
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
