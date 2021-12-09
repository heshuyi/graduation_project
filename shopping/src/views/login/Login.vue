<template>
  <div class="login-box">
    <div class="login-title">欢迎登陆价高者得</div>
    <div class="login-form">
      <div class="from">
        <span>账号:</span><input id="account"  type="text" v-model="account" />
      </div>
      <div class="from">
        <span>密码:</span><input id="password" type="password" v-model="password" />
      </div>
      <div class="my-button">
        <button @click="loginIn" id="login-in">登录</button>
        <button @click="makeNew" id="make-new">注册</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Login",
  data() {
    return {
      account: "",
      password: "",
    };
  },
  methods: {
    loginIn(){
      // if(!this.account){
      //   alert('账号未输入')
      //   return
      // }
      // if(!this.password){
      //   alert('密码未输入')
      //   return
      // }
      this.$http({methods:'get',url:'http://localhost:3001/api11',params:{name:1}}).then((res)=>{console.log(res);})
      // window.sessionStorage.setItem('token','123')
      // this.$router.push('/shoppingapp')
      //后端验证
    },
    makeNew(){
      // 后端请求
      // 存在告诉存在了
      // 不存在注册并提示注册成功
    }
  },
};
</script>
<style lang="less" scoped>
.login-box {
  .login-title {
    width: 700rem;
    height: 200rem;
    background-color: blanchedalmond;
    margin: 0 auto;
    text-align: center;
    line-height: 200rem;
    font-size: 70rem;
  }
  .login-form {
    // background-color: blue;
    width: 750rem;
    .from {
      margin: 15px auto;
      width: 650rem;
      font-size: 40rem;
      #account,
      #password {
        width: 500rem;
        height: 40px;
        margin-left: 15px;
      }
    }
    .my-button{
      #login-in,#make-new{
        display: inline-block;
        width: 200rem;
      height: 60rem;
      margin: 0 87rem;
      }
    }
  }
}
</style>