<template>
  <div class="user-wrapper bgc_u_b">
      <div class="form-box w_400 mg_0a pt_40">
        <span class="to-register c_f ft_12 c_r" @click="changePath">{{pathName}}</span>
        <div class="header">
             <img src="../assets/images/user/logo.png" alt="">
        </div>
         <transition name="el-fade-in">
            <nuxt/>
        </transition>
      </div>
  </div>
</template>

<script>
  export default {
      data(){
          return {
             path:"/user/register",
             pathName:"没有账号请先注册 >>",
             show:false
          }
      },
      methods:{
          changePath(){
              if(this.$route.name=="user-register") {
                  this.$router.push("/user/login")
                  this.pathName="没有账号请先注册 >>"
              }else{
                  this.$router.push("/user/register")
                  this.pathName="有账号请直接登录 >>"
              }
          }
      }
  }
</script>

<style scoped lang="stylus">
   .user-wrapper
       absolute(0,0,0,0)
       .form-box
          absolute()
          border-top 1px solid #e9ecef
          flex(center,column)
          .to-register
             absolute(auto,-28px,auto,0)
             &:hover
               color #ffb848

</style>
