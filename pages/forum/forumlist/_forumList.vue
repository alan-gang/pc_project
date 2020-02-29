<template>
  <div>
    用户列表页面
    <hr>
    {{ id}}
  </div>
</template>

<script>
export default {
  created () {
    // console.log(this.$route.params)
  },
  /*  watch: {
   $route(route) {
     console.log(route)
   }
 }, */
  computed: {
    id () {
      return this.$route.params.forumList
    }
  }
}
</script>

<style scoped>
</style>
