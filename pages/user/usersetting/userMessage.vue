<template>
  <div class="userinfo-container w_840">
    <div class="title-container ft_24 c_6 ft_b mt_30 ">
      个人资料
    </div>
    <el-form label-position="right" label-width="80px" class="mt_40" :model="form" :rules="rules">
      <el-row>
        <el-col :span="24">

          <!-- 姓名处理 开始-->
          <el-form-item label="姓名" class="w_100p" prop="username">
            <el-input ref="username" v-model="form.username" class="ml_20" @focus="activeIndex = 1" placeholder="请输入姓名">

              <!-- 按钮 -->
              <template slot="suffix">
                <div v-if="activeIndex !== 1" class="c_e c_r" @click="$refs.username.focus()">
                  <i class="icon iconfont icon-write_fill"></i>
                  <span>修改</span>
                </div>

                <div v-else>
                  <el-button type="text" :disabled="usernameIsDisabled" @click="activeIndex=1 && _updateUser('username',{username:form.username})">保存</el-button>
                  <el-link @click="activeIndex=-1">取消</el-link>
                </div>
              </template>
            </el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <!-- 姓名处理 结束 =============================-->

      <el-row>
        <!-- 性别处理开始=============================-->
        <el-col :span="10">
          <el-form-item label="性别" class="w_100p">
            <div class="ml_20">
              <el-radio v-model="form.gender" label="1" @change=" _updateUser('gender',{gender:form.gender})">男孩</el-radio>
              <el-radio v-model="form.gender" label="2" @change=" _updateUser('gender',{gender:form.gender})">女孩</el-radio>
            </div>
          </el-form-item>
        </el-col>
        <!-- 性别处理 结束 =============================-->

        <el-col :span="10" :push="4">
          <!-- 婚姻处理开始=============================-->
          <el-form-item label="婚姻状况" class="w_100p">
            <div class="ml_20">
              <el-radio v-model="form.marriage" label="1" @change=" _updateUser('marriage',{marriage:form.marriage})">已婚</el-radio>
              <el-radio v-model="form.marriage" label="2" @change=" _updateUser('marriage',{marriage:form.marriage})">未婚</el-radio>
            </div>
          </el-form-item>
        </el-col>
      </el-row>
      <!-- 婚姻处理结束=============================-->
      <el-row>

        <!-- 出生日期开始-->
        <el-col :span="6">
          <el-form-item label="出生日期" class="w_100p">
            <el-date-picker format="yyyy 年 MM 月 dd 日" @change=" _updateUser('dateBirth',{dateBirth:form.dateBirth})" class="ml_20" v-model="form.dateBirth" type="date" placeholder="选择生日" value-format="timestamp">
            </el-date-picker>
          </el-form-item>
        </el-col>
        <!--出生日期结束-->
        <!--毕业时间开始-->
        <el-col :span="6" :push="8">
          <el-form-item label="毕业时间" class="w_100p">
            <el-date-picker format="yyyy 年 MM 月 dd 日" @change=" _updateUser('graduationTime',{graduationTime:form.graduationTime})" class="ml_20" v-model="form.graduationTime" type="date" placeholder="选择大学/高中毕业时间" value-format="timestamp">
            </el-date-picker>
          </el-form-item>
        </el-col>
        <!--毕业时间结束-->
      </el-row>
      <el-row>
        <!--家乡开始-->
        <el-col :span="6">
          <el-form-item label="家乡" class="w_100p">
            <el-cascader :props="props" class="ml_20" placeholder="请输入你的家乡" @visible-change="(falg)=>isRequset=falg" v-model="form.home"></el-cascader>
            <!-- :value="form.home" -->
          </el-form-item>
        </el-col>
        <!--家乡结束-->
        <el-col :span="6" :push="8">
          <el-form-item label="现居住地" class="w_100p">
            <el-cascader class="ml_20" placeholder="请输入你当前的居住地址" v-model="form.currentHome"></el-cascader>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="6">
          <el-form-item label="入学时间" class="w_100p">
            <el-date-picker class="ml_20" v-model="form.enterTime" type="date" placeholder="选择入学时间">
            </el-date-picker>
          </el-form-item>
        </el-col>
        <el-col :span="6" :push="8">
          <el-form-item label="离校时间" class="w_100p">
            <el-date-picker class="ml_20" v-model="form.leaveTime" type="date" placeholder="选择离校时间">
            </el-date-picker>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="6">
          <el-form-item label="所在班级" class="w_100p">
            <el-cascader class="ml_20" placeholder="请输入你的班级/专业" v-model="form.class"></el-cascader>
          </el-form-item>
        </el-col>
        <el-col :span="10" :push="8">
          <el-form-item label="寝室编号" class="w_100p">
            <el-select class="ml_20" v-model="form.dormitory" placeholder="请输入您的寝室">
              <!-- <el-option v-for="item in options"
                         :key="item.value"
                         :label="item.label"
                         :value="item.value">
              </el-option> -->
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <el-form-item label="微信" class="w_100p">
            <el-input ref="wechat" v-model="form.wechat" class="ml_20" @focus="activeIndex = 2" @blur="activeIndex=-1" placeholder="请输入姓名">
              <template slot="suffix">
                <div v-if="activeIndex !== 2" class="c_e c_r" @click="$refs.wechat.focus()">
                  <i class="icon iconfont icon-write_fill"></i>
                  <span>修改</span>
                </div>
                <div v-else>
                  <el-button type="text">保存</el-button>
                  <el-link :underline="false">取消</el-link>
                </div>
              </template>
            </el-input>
          </el-form-item>
        </el-col>
        <el-col :span="24">
          <el-form-item label="QQ" class="w_100p">
            <el-input ref="qq" v-model="form.qq" class="ml_20" @focus="activeIndex = 3" @blur="activeIndex=-1" placeholder="请输入姓名">
              <template slot="suffix">
                <div v-if="activeIndex !== 3" class="c_e c_r" @click="$refs.qq.focus()">
                  <i class="icon iconfont icon-write_fill"></i>
                  <span>修改</span>
                </div>
                <div v-else>
                  <el-button type="text">保存</el-button>
                  <el-link :underline="false">取消</el-link>
                </div>
              </template>
            </el-input>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <div class="title-container ft_24 c_6 ft_b mt_30 ">
      操作
    </div>
    <div class="cancel-group mt_30 ml_15 c_6 ft_18">
      <el-button type="primary" @click="goHome" class="w_30p" :disabled="visitDisabled">访问首页面</el-button>
    </div>
  </div>
</template>

<script>

import userMixin from "~/assets/mixin/userMixin.js"
import dialogMixin from "~/assets/mixin/dialogMixin.js"
import { updateUser, getAddress } from '~/api'


let id = 0;
export default {
  mixins: [userMixin, dialogMixin],
  beforeMount () {
    this.props = {
      lazy: true,//开启动态加载
      lazyLoad: async (node, resolve) => { //设置加载数据源的方法
        const { level } = node;
        let res = await this._getAddress(level)
        //   setTimeout(() => {
        //     const nodes = [1, 2, 3, 4, 5]
        //       .map(item => ({
        //         value: ++id,
        //         label: `选项${id}`,
        //         leaf: level >= 2
        //       }));
        resolve(res);
        //   }, 200);
      }
    }
  },
  data () {
    return {
      activeIndex: -1,
      visitDisabled: true,
      useNameLogin: false,
      form: JSON.parse(JSON.stringify(this.$store.state.user.UserInfo)),
      props: null,
      isRequset: false
    };
  },
  methods: {
    handleChange (val) {
    },
    async  _updateUser (type, params) {
      let res = await updateUser(params);
      if (res.code != 0) return
      sessionStorage.token = res.data.token;
      this.$store.commit('user/saveUserInfo', res.data.user);
      this.alert(res.data.msg, 'success')
    },
    goHome () {

    },
    async _getAddress (level, parentid = null) {
      let lists = ["province", "city", "town"];
      // let appkey = "4b775b74c1af75ba";
      let { result } = await getAddress(lists[level], { parentid });
      console.log(result)
    }
  }
}
</script>

<style scoped lang="stylus">
    @import '../css/userMessage.styl'
</style>
