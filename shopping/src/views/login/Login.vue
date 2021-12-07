<template>
  <div class="login-box">
    <div class="login-title">欢迎登陆价高者得</div>
    <div class="login-form">
      <input type="text" v-model="user">
      <input type="password" v-model="password">
    </div>
  </div>
</template>
<script>
export default {
  name: "Login",
  data() {
    return {
      user: "",
      password: "",
    };
  },
  methods: {

  },
};
</script>
<style scoped>
.login-box {
  width: 100vw;
  height: 100vh;
  background-color: red;
}
.login-title{
  
}
</style>