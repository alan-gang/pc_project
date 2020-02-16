<template>
  <div class="userinfo-container w_840">
    <div class="title-container ft_24 c_6 ft_b mt_30 ">
      个人资料
    </div>
    <el-form label-position="right"
             label-width="80px"
             class="mt_40"
             :model="userForm">
      <el-row>
        <el-col :span="24">
          <el-form-item label="姓名"
                        class="w_100p">
            <el-input ref="username"
                      v-model="userForm.name"
                      class="ml_20"
                      @focus="activeIndex = 1"
                      @blur="activeIndex=-1"
                      placeholder="请输入姓名">
              <template slot="suffix">
                <div v-if="activeIndex !== 1"
                     class="c_e c_r"
                     @click="$refs.username.focus()">
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
      <el-row>
        <el-col :span="10">
          <el-form-item label="性别"
                        class="w_100p">
            <div class="ml_20">

              <el-radio v-model="userForm.gender"
                        label="1">男孩</el-radio>
              <el-radio v-model="userForm.gender"
                        label="2">女孩</el-radio>
            </div>
          </el-form-item>
        </el-col>
        <el-col :span="10"
                :push="4">
          <el-form-item label="婚姻状况"
                        class="w_100p">
            <div class="ml_20">
              <el-radio v-model="userForm.gender"
                        label="1">已婚</el-radio>
              <el-radio v-model="userForm.gender"
                        label="2">未婚</el-radio>
            </div>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="6">
          <el-form-item label="出生日期"
                        class="w_100p">
            <el-date-picker class="ml_20"
                            v-model="userForm.dateTime"
                            type="date"
                            placeholder="选择出生年月">
            </el-date-picker>
          </el-form-item>
        </el-col>
        <el-col :span="6"
                :push="8">
          <el-form-item label="毕业时间"
                        class="w_100p">
            <el-date-picker class="ml_20"
                            v-model="userForm.graduationTime"
                            type="date"
                            placeholder="选择大学/高中毕业时间">
            </el-date-picker>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="6">
          <el-form-item label="家乡"
                        class="w_100p">
            <el-cascader :props="props"
                         class="ml_20"
                         placeholder="请输入你的家乡"
                         v-model="userForm.home"></el-cascader>
            <!-- :value="userForm.home" -->
          </el-form-item>
        </el-col>
        <el-col :span="6"
                :push="8">
          <el-form-item label="现居住地"
                        class="w_100p">
            <el-cascader :props="props"
                         class="ml_20"
                         placeholder="请输入你当前的居住地址"
                         v-model="userForm.home"></el-cascader>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="6">
          <el-form-item label="入学时间"
                        class="w_100p">
            <el-date-picker class="ml_20"
                            v-model="userForm.enterTime"
                            type="date"
                            placeholder="选择入学时间">
            </el-date-picker>
          </el-form-item>
        </el-col>
        <el-col :span="6"
                :push="8">
          <el-form-item label="离校时间"
                        class="w_100p">
            <el-date-picker class="ml_20"
                            v-model="userForm.leaveTime"
                            type="date"
                            placeholder="选择离校时间">
            </el-date-picker>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="6">
          <el-form-item label="所在班级"
                        class="w_100p">
            <el-cascader :props="props"
                         class="ml_20"
                         placeholder="请输入你的班级/专业"
                         v-model="userForm.class"></el-cascader>
          </el-form-item>
        </el-col>
        <el-col :span="10"
                :push="8">
          <el-form-item label="寝室编号"
                        class="w_100p">
            <el-select class="ml_20"
                       v-model="userForm.dormitory"
                       placeholder="请输入您的寝室">
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
          <el-form-item label="微信"
                        class="w_100p">
            <el-input ref="wechat"
                      v-model="userForm.wechat"
                      class="ml_20"
                      @focus="activeIndex = 2"
                      @blur="activeIndex=-1"
                      placeholder="请输入姓名">
              <template slot="suffix">
                <div v-if="activeIndex !== 2"
                     class="c_e c_r"
                     @click="$refs.wechat.focus()">
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
        <el-form-item label="QQ"
                      class="w_100p">
          <el-input ref="qq"
                    v-model="userForm.qq"
                    class="ml_20"
                    @focus="activeIndex = 3"
                    @blur="activeIndex=-1"
                    placeholder="请输入姓名">
            <template slot="suffix">
              <div v-if="activeIndex !== 3"
                   class="c_e c_r"
                   @click="$refs.qq.focus()">
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
  </div>
</template>

<script>
let id = 0;
export default {
  data () {
    return {
      activeIndex: -1,
      useNameLogin: false,
      userForm: {
        name: "",
        gender: '',
        dateTime: '',
        graduationTime: '',
        leaveTime: '',
        class: [],
        enterTime: '',
        dormitory: '',
        wechat: '',
        qq: '',
        home: [],
      },
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
    //   console.log(val);
    }
  }
}
</script>

<style scoped lang="stylus">
    .userinfo-container
      margin 0 auto
      .title-container,.bottom-container
        flex(flex-start)
        &:before
            content: "";
            display: block;
            width: .4em;
            height: 1em;
            margin-left: -.5em;
            margin-right: 16px;
            background-color: #3494fc;
      .btn-group
        flex(flex-start)
      .cancel-group
          flex(flex-start)

</style>

<style scoped lang="stylus">
    .userinfo-container
        >>>.el-collapse
                  border none
        >>>.el-collapse-item__header
                  border none
        >>>.el-input__inner
                  border:none
                  border-radius 0
                  border-bottom: 1px solid #DCDFE6;
        >>>.el-input__inner:focus
                  border-bottom-color: #409EFF !important
        >>>.el-form-item__label
                  font-size 17px
                  color: rgba(0,0,0,.7);
                  padding 0
                  font-weight: bold
                  padding-left: 12px;
                  margin-bottom:-25px;
        >>>.el-collapse-item__arrow
                  display none
                .on
                  >>>.el-input__suffix
                              color #409eff
        >>>.el-collapse-item__wrap
                    border none
</style>
