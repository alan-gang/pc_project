<template>
  <div>
    <v-header style="background:red">头部公共文件</v-header>

    <div class="main">
    <side-bar class="nav-bar"></side-bar>
    <nuxt/>
    </div>
  </div>
</template>

<script>
import vHeader from '~/components/header'
import sideBar from '~/components/sidebar'
  export default {
      components:{
        vHeader,
        sideBar
      }
  }
</script>

<style scoped>
  .main {
    display: flex;
  }

  .nav-bar {
    width: 200px;
    height: 100%;
    background-color: blue
  }
</style>
