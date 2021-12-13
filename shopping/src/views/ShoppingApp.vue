<template>
  <div class="app-box">
    <router-view />
    <div class="bottom-box">
      <router-link class="router-link" to="/purchase">购买</router-link>
      <router-link class="router-link" to="/sell">卖</router-link>
      <router-link class="router-link" to="/shopping">订单</router-link>
      <router-link class="router-link" to="/mine">我</router-link>
    </div>
    
  </div>
</template>
<script>
export default {
  name:'ShoppingApp'
}
</script>
<style lang="less" scoped>
.app-box{
  .bottom-box{
    width: 750rem;
    height: 100rem;
    background-color: violet;
    position: fixed;
    bottom: 0;
    .router-link{
      display: inline-block;
      height: 80rem;
      width: 100rem;
      background-color: turquoise;
      margin: 10rem 43.75rem;
    }
  }
}
</style>