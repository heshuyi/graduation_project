<template>
  <div id="mine">
  <div>name:</div>
  <div class="outLogin" @click="tuichu">退出</div>
  </div>
</template>
<script>
export default {
  name:'Mine',
  data(){
    return{
      myData:null
    }
  },
  created(){
    // var token1 = window.sessionStorage.getItem('token')
    // var token = {
    //   'token':token1
    // }
    this.$http.get('http://localhost:3001/api11', {params:{'token':1}}).then((res)=>{
      console.log(res);
    })
  }
  ,
  methods:{
    tuichu(){
      window.sessionStorage.clear()
      this.$router.push('/login')
    }
  }
}
</script>
<style lang="less" scoped>
#mine{
  .outLogin{
    width: 200rem;
    height: 100rem;
    font-size: 40rem;
    background-color: chartreuse;
    text-align: center;
    line-height: 100rem;
  }
}
</style>