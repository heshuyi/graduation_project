<template>
  <div class="purchase">
    <div class="find-box">
      <input type="text">
      <span >搜索</span>
    </div>
  </div>
</template>
<script>
export default {
  name:'Purchase',
  data(){
    return{

    }
  }
}
</script>
<style lang="less" scoped>
.purchase{
  .find-box{
    width: 500rem;
    margin: 0 auto;
    input{
      width: 400rem;
      margin: 20rem 10rem;
    }
    span{
      font-size: 30rem;
      background-color: burlywood;
      border-radius: 30%;
    }
  }
}
</style>