<template>
  <div class="app-box">
    
    <div class="bottom-box">
      <router-link to="/purchase">购买</router-link>
      <router-link to="/sell">卖</router-link>
      <router-link to="/shopping">订单</router-link>
      <router-link to="/mine">我</router-link>
    </div>
    <router-view />
  </div>
</template>
<script>
export default {
  name:'ShoppingApp'
}
</script>