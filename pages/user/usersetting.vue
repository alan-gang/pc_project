<template>
  <div>
    <nuxt-child />
  </div>
</template>

<script>
export default {
  created () {
    this.generateList()
  },
  methods: {
    generateList () {
      let list = [
        {
          icon: 'icon-shezhi_huaban',
          title: '账户设置',
          list: []
        }, {
          icon: 'icon-mingpian',
          title: '个人信息设置',
          list: []
        }, {
          icon: 'icon-wode_huaban',
          title: '头像设置',
          list: []
        }, {
          icon: 'icon-xuexiao',
          title: '详细内容',
          list: []
        }
      ]
    }
  }
}
</script>

<style scoped>
</style>
