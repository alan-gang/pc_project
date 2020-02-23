<template>
  <el-form-item :label="label " class="w_100p">
    <el-cascader ref="area" :props="cityData" class="ml_20" :class="{demo:val}" :placeholder="val?val:currentVal" v-model="value"></el-cascader>
  </el-form-item>
</template>

<script>
import { getAddress } from '~/api'
export default {
  props: {
    val: String,
    currentVal: String,
    label: String
  },
  beforeMount () {
    this.cityData = {
      lazy: true,
      lazyLoad: async (node, resolve) => {
        const { level, value } = node;
        let res = await this._getAddress(level, value)
        let s = resolve(res);
      }
    }
  },
  data () {
    return {
      cityData: null,
      myAddress: [],
    }
  },
  methods: {
    async _getAddress (level, parentid = null) {
      let lists = ["province", "city", "town"];
      let { result, areacode } = await getAddress(lists[level], { parentid });
      /* 获取直辖市id */
      let arr = [1, 26, 31, 24, 22]
      let n = arr.includes(parentid) ? 1 : 2
      return result && result.map(item => ({
        value: item.id,
        label: item.name,
        leaf: level >= n
      }));
    },
  },
  computed: {
    value: {
      get () {
        return this.val
      },
      set (msg) {
        this.$emit('postArea', this.$refs['area'].getCheckedNodes()[0].pathLabels.join('-'))
      }
    }
  }
}
</script>

<style scoped lang="stylus">
  .demo {
   /deep/ input::-webkit-input-placeholder {
        color: #606266 !important;
      }
  }
</style>
