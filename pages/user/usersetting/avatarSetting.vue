<template>
  <div>
      <div>
        <el-button type="success">上传头像图片</el-button>
        <span>(支持文件拖放上传，只能上传单张10M以下png、jpg、gif图片)</span>
      </div>
      <div class="flex mt_20 flex-jc-s a_e">
          <div class="show-avatar mr_20 p_r">
              <el-avatar   src="/images/home/avatar_setting_small.png" shape="square" :size="400"></el-avatar>
              <div v-if="show" class="progress w_400 h_400 bgc_f o_50">
                    <el-progress class="progress" type="circle" :percentage="percentage"></el-progress>
              </div>
              
          </div>
          <div class="flex f-d-c a_s">
              <div>
                    <p class="mb_10">当前头像</p>
                    <p class="mb_10">48px * 48px</p>
                    <div class="p_r">
                        <el-avatar  class="p_a"  src="/images/home/update_avatar.jpg" shape="square" :size="48"></el-avatar>
                        <input type="file" class="w_48 h_48 h_o z_10">
                    </div>
              </div>
              <div class="mt_20">
                    <p class="mb_10">180px * 180px</p>
                    <div class="p_r">
                        <el-avatar class="p_a"  src="/images/home/update_avatar.jpg" shape="square" :size="180"></el-avatar>
                        <input type="file" class="w_180 h_180 h_o z_10">
                    </div>
                    
              </div>
              
          </div>
      </div>
    
  </div>
</template>

<script>
  export default {
     data(){
         return {
             percentage:0,
             timer:null,
             show:true
         }
     },
     created(){
        this.timer =  setInterval(()=>{
            if( this.percentage==100) {
                this.show = false
                clearInterval(this.timer)
                return
            }
             this.percentage+=1
         },100)
     }
  }
</script>

<style scoped lang="stylus">
.progress{
    absolute()
}
</style>
