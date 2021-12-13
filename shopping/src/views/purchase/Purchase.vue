<template>
  <div class="purchase">
    <div ref="findbox" class="find-box">
      <input type="text">
      <span>搜索</span>
    </div>
    <div ref="showbox" class="show-box">
      <div>
        孙心怡
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name:'Purchase',
  data(){
    return{
      goods:[]
    }
  }, 
  created(){
    
  },
  mounted(){
    var clientHight = document.body.clientHight ||document.documentElement.clientHeight;
    // console.log(clientHight);
    var showbox = this.$refs.showbox;
    var findbox = this.$refs.findbox;
    findbox = findbox.offsetHeight
    showbox.style.height = clientHight - findbox*2 + 'px';
  },
  methods:{

  }
}
</script>
<style lang="less" scoped>
.purchase{
  width: 750rem;
  overflow-x: hidden;
  .find-box{
    width: 500rem;
    height: 100rem;
    background-color: brown;
    margin: 0 auto;
    box-sizing: border-box;
    // line-height: 100rem;
    input{
      width: 350rem;
      margin: 25rem 20rem;
    }
    span{
      font-size: 30rem;
      background-color: burlywood;
      border-radius: 30%;
    }
  }
  .show-box{
    width: 100%;
    // height:100vh;
    background-color: blue;
    margin-bottom: 100rem;
  }
}
</style>