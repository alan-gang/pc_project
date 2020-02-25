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
                  <el-button type="text" :disabled="isInputDisabled" @click="activeIndex=1 && _updateUser('username',{username:form.username})">保存</el-button>
                  <el-link @click="(activeIndex=-1,isInputDisabled = true)">取消</el-link>
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
          <vAddress currentVal="请输入你的家乡" :val="form.address" label="家乡" @postArea=" (address)=>_updateUser('address',{address})" />
        </el-col>
        <!--家乡结束-->

        <!-- 现居地开始 -->
        <el-col :span="6" :push="8">
          <vAddress currentVal="请输入你当前的居住地址" :val="form.currentAddress" label="现居地" @postArea="(currentAddress)=> _updateUser('currentAddress',{currentAddress})" />
        </el-col>
        <!-- 现居地结束 -->
      </el-row>

      <el-row>
        <!-- 入学时间开始 -->
        <el-col :span="6">
          <el-form-item label="入学时间" class="w_100p">
            <el-date-picker class="ml_20" :class="{warning:!form.enterScollTime}" v-model="form.enterScollTime" type="date" readonly placeholder="班主任进行入学时间确认" @change=" _updateUser('enterScollTime',{enterScollTime:form.enterScollTime})">
            </el-date-picker>
          </el-form-item>
        </el-col>
        <!-- 入学时间结束 -->

        <!-- 离校时间开始 -->
        <el-col :span="6" :push="8">
          <el-form-item label="离校时间" class="w_100p">
            <el-date-picker class="ml_20" :class="{warning:!form.leaveSchollTime}" v-model="form.leaveSchollTime" type="date" readonly placeholder="班主任进行离校时间确认" @change=" _updateUser('leaveSchollTime',{leaveSchollTime:form.leaveSchollTime})">
            </el-date-picker>
          </el-form-item>
        </el-col>
      </el-row>
      <!-- 离校时间结束-->

      <el-row>
        <!-- 班级开始 -->
        <el-col :span="6">
          <el-form-item label="所在班级" class="w_100p">
            <el-cascader ref="className" class="ml_20" :class="{normal:form.className}" :options="classOptions" readonly :placeholder="`${form.className?form.className:'请输入你的班级/专业'}`" v-model="form.className" @change=" _updateUser('className',{className:$refs['className'].getCheckedNodes()[0].pathLabels.join('/')})"></el-cascader>
          </el-form-item>
        </el-col>
        <!-- 班级结束 -->

        <!-- 寝室开始 -->
        <el-col :span="10" :push="8">
          <el-form-item label="寝室编号" class="w_100p">
            <el-select class="ml_20" v-model="form.dormitory" placeholder="请输入您的寝室">
              <el-option v-for="item in [{label:'1-02',value:2},{label:'1-03',value:3}]" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <!-- 寝室结束 -->
      </el-row>

      <el-row>
        <!-- 微信开始 -->
        <el-col :span="24">
          <el-form-item label="微信" class="w_100p" prop="wechat">
            <el-input ref="wechat" v-model="form.wechat" class="ml_20" @focus="activeIndex = 3" placeholder="请输入微信号">
              <!-- 按钮 -->
              <template slot="suffix">
                <div v-if="activeIndex !== 3" class="c_e c_r" @click="$refs.wechat.focus()">
                  <i class="icon iconfont icon-write_fill"></i>
                  <span>修改</span>
                </div>

                <div v-else>
                  <el-button type="text" :disabled="isInputDisabled" @click="activeIndex=1 && _updateUser('wechat',{wechat:form.wechat})">保存</el-button>
                  <el-link @click="(activeIndex=-1,isInputDisabled = true)">取消</el-link>
                </div>
              </template>
            </el-input>
          </el-form-item>
        </el-col>
        <!-- 微信结束 -->

        <!-- qq开始 -->
        <el-col :span="24">
          <el-form-item label="QQ" class="w_100p" prop="qq">
            <el-input ref="qq" v-model="form.qq" class="ml_20" @focus="activeIndex = 4" placeholder="请输入qq号码">

              <!-- 按钮 -->
              <template slot="suffix">
                <div v-if="activeIndex !== 3" class="c_e c_r" @click="$refs.wechat.focus()">
                  <i class="icon iconfont icon-write_fill"></i>
                  <span>修改</span>
                </div>
                <div v-else>
                  <el-button type="text" :disabled="isInputDisabled" @click="activeIndex=1 && _updateUser('wechat',{wechat:form.wechat})">保存</el-button>
                  <el-link @click="(activeIndex=-1,isInputDisabled = true)">取消</el-link>
                </div>
              </template>

            </el-input>
          </el-form-item>
        </el-col>
        <!-- qq结束 -->
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
import vAddress from '~/components/user/getAddress.vue'
import { updateUser, getClassList } from '~/api'



let id = 0;
export default {
  mixins: [userMixin, dialogMixin],
  components: {
    vAddress
  },
  beforeMount () {
    this._initClassList()
  },
  data () {
    return {
      activeIndex: -1,
      visitDisabled: true,
      useNameLogin: false,
      classOptions: null,
      form: JSON.parse(JSON.stringify(this.$store.state.user.UserInfo)),
    };
  },
  methods: {
    async  _updateUser (type, params) {
      let res = await updateUser(params);
      if (res.code != 0) return
      sessionStorage.token = res.data.token;
      this.$store.commit('user/saveUserInfo', res.data.user);
      this.alert(res.data.msg, 'success')
    },
    async _initClassList () {
      let { code, data: { classLists } } = await getClassList()
      if (code != 0) return
      this.classOptions = classLists;
    },
    goHome () { }
  }
}
</script>

<style scoped lang="stylus">
    @import '../css/userMessage.styl'
</style>
