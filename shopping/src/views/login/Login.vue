<template>
  <div class="login-box">
    <div class="login-title">欢迎登陆价高者得</div>
    <div class="login-form">
      <div class="from">
        <span>账号:</span><input id="account" type="text" v-model="account" />
      </div>
      <div class="from">
        <span>密码:</span
        ><input id="password" type="password" v-model="password" />
      </div>
      <div class="my-button">
        <button @click="loginIn" id="login-in">登录</button>
        <button @click="makeNew" id="make-new">注册</button>
      </div>
    </div>
    <div class="make-new-box" v-if="makeNewBox">
      <h1 class="make-new-box-title">注册</h1>
      <div class="close" @click="closeMakeNew">X</div>
      <van-address-edit
        :area-list="areaList"
        show-postal
        show-search-result
        :search-result="searchResult"
        :area-columns-placeholder="['请选择', '请选择', '请选择']"
        @save="onSave"
      >
        <template>
          <van-field
            key="123"
            v-model="newPassword1"
            placeholder="输入密码"
            type="password"
            label="密码"
          />
          <van-field
            key="num2"
            v-model="newPassword2"
            placeholder="再输入密码"
            type="password"
            label="密码2"
          />
        </template>
      </van-address-edit>
    </div>
  </div>
</template>
<script>
import { Toast } from "vant";
import { areaList } from "@vant/area-data";
export default {
  name: "Login",
  data() {
    return {
      account: "",
      password: "",
      makeNewBox: false,
      areaList,
      searchResult: [],
      asd: null,
      text: "",
      newPassword1: "",
      newPassword2: "",
    };
  },
  methods: {
    closeMakeNew() {
      this.makeNewBox = false;
    },
    async loginIn() {
      if (!this.account) {
        alert("账号未输入");
        return;
      }
      if (!this.password) {
        alert("密码未输入");
        return;
      }
      var data1 = {
        account: this.account,
        password: this.password,
      };
      var c = await this.$http.post("http://localhost:3001/tologin", data1);
      if (c.status == 200) {
        console.log(c);
        if (c.data.status == 1) {
          window.sessionStorage.setItem("token", this.account);
          this.$router.push("/shoppingapp");
        } else if (c.data.status == 2) {
          alert(c.data.msg);
        } else {
          alert(c.data.msg);
        }
      }
    },
    makeNew() {
      this.makeNewBox = true;
    },
    async onSave(content) {
      console.log(content);
      if (this.newPassword1 != this.newPassword2) {
        alert("两次密码错误");
        return;
      }
      var newcontent = {
        tel: content.tel,
        name: content.name,
        password: this.newPassword1,
        province: content.province,
        city: content.city,
        county: content.county,
        postalCode: content.postalCode,
        addressDetail: content.addressDetail,
      };
      // console.log(newcontent);
      var res = await this.$http.post("http://localhost:3001/registered", newcontent);
      if (res.status == 200) {
        alert(res.data.msg);
      }
      Toast("save");
    },
  },
};
</script>
<style lang="less" scoped>
.login-box {
  width: 750rem;
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
    .my-button {
      font-size: 30rem;
      #login-in,
      #make-new {
        display: inline-block;
        width: 200rem;
        height: 60rem;
        margin: 0 87rem;
      }
    }
  }
  .make-new-box {
    position: fixed;
    top: 0;
    left: 0;
    width: 750rem;
    height: 100%;
    background-color: white;
    // background-color: black;
    .close {
      width: 50rem;
      height: 50rem;
      position: absolute;
      top: 0;
      right: 0;
      background-color: wheat;
      font-size: 30rem;
      text-align: center;
      line-height: 50rem;
    }
    .make-new-box-title {
      font-size: 50rem;
      text-align: center;
    }
  }
}
</style>