<template>
  <div class="error-wrapper ">
    <div class="error-body t_c">
      <h1 class="ft_210 ft_b lh_210 c_e_4 mb_10">404</h1>
      <h3 class="mb_10 ft_24">PAGE NOT FOUND !</h3>
      <p class="mt_30 mb_30 c_e_f">YOU SEEM TO BE TRYING TO FIND HIS WAY HOME</p>
      <a
        href="/"
        class="r_60 c_r pt_10 pb_10 pl_18 pr_18 c_f bgc_e_4 ft_12"
      >Back to home</a>
    </div>
  </div>
</template>

<script>
export default {
  layout: "404"
};
</script>

<style scoped lang="stylus">
 .error-body
    padding-top 5%
    h1
        text-shadow: 4px 4px 0 #fff, 6px 6px 0 #343a40;
    h3
        text-transform: uppercase!important;

</style>
