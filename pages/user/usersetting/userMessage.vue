<template>
  <div class="userinfo-container w_840">
    <div class="title-container ft_24 c_6 ft_b mt_30 ">
      个人资料
    </div>
    <el-form label-position="right" label-width="80px" class="mt_40" :model="form" :rules="rules">
      <el-row>
        <el-col :span="24">

          <!-- 姓名处理 -->
          <el-form-item label="姓名" class="w_100p" prop="username">
            <el-input ref="username" v-model="form.username" class="ml_20" @focus="activeIndex = 1" placeholder="请输入姓名">

              <!-- 按钮 -->
              <template slot="suffix">
                <div v-if="activeIndex !== 1" class="c_e c_r" @click="$refs.username.focus()">
                  <i class="icon iconfont icon-write_fill"></i>
                  <span>修改</span>
                </div>

                <div v-else>
                  <el-button type="text" :disabled="isSaveUserName" @click="activeIndex=1 && _updateUser(['username'],{username:form.username})">保存</el-button>
                  <el-link @click="activeIndex=-1">取消</el-link>
                </div>
              </template>
            </el-input>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="10">
          <el-form-item label="性别" class="w_100p">
            <div class="ml_20">

              <el-radio v-model="form.gender" label="1">男孩</el-radio>
              <el-radio v-model="form.gender" label="2">女孩</el-radio>
            </div>
          </el-form-item>
        </el-col>
        <el-col :span="10" :push="4">
          <el-form-item label="婚姻状况" class="w_100p">
            <div class="ml_20">
              <el-radio v-model="form.gender" label="1">已婚</el-radio>
              <el-radio v-model="form.gender" label="2">未婚</el-radio>
            </div>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="6">
          <el-form-item label="出生日期" class="w_100p">
            <el-date-picker class="ml_20" v-model="form.dateTime" type="date" placeholder="选择出生年月">
            </el-date-picker>
          </el-form-item>
        </el-col>
        <el-col :span="6" :push="8">
          <el-form-item label="毕业时间" class="w_100p">
            <el-date-picker class="ml_20" v-model="form.graduationTime" type="date" placeholder="选择大学/高中毕业时间">
            </el-date-picker>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="6">
          <el-form-item label="家乡" class="w_100p">
            <el-cascader :props="props" class="ml_20" placeholder="请输入你的家乡" v-model="form.home"></el-cascader>
            <!-- :value="form.home" -->
          </el-form-item>
        </el-col>
        <el-col :span="6" :push="8">
          <el-form-item label="现居住地" class="w_100p">
            <el-cascader :props="props" class="ml_20" placeholder="请输入你当前的居住地址" v-model="form.home"></el-cascader>
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
            <el-cascader :props="props" class="ml_20" placeholder="请输入你的班级/专业" v-model="form.class"></el-cascader>
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


let id = 0;
export default {
  mixins: [userMixin, dialogMixin],
  data () {
    return {
      activeIndex: -1,
      visitDisabled: true,
      useNameLogin: false,
      form: JSON.parse(JSON.stringify(this.$store.state.user.UserInfo)),
      props: {
        lazy: true,
        lazyLoad (node, resolve) {
          const { level } = node;
          setTimeout(() => {
            const nodes = [1, 2, 3, 4, 5]
              .map(item => ({
                value: ++id,
                label: `选项${id}`,
                leaf: level >= 2
              }));
            resolve(nodes);
          }, 200);
        }
      }
    };
  },
  methods: {
    handleChange (val) {
    },
    async  _updateUser () {
      console.log(123)
    },
    goHome () {

    }
  }
}
</script>

<style scoped lang="stylus">
    @import '../css/userMessage.styl'
</style>
