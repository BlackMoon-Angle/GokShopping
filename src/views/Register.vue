<template>
  <div>
    <!-- 头部导航 -->
    <van-nav-bar title="注册" left-text="返回" left-arrow @click-left="onClickLeft" />
    <!-- 表单 -->
    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="用户名"
        label="用户名"
        placeholder="用户名"
        left-icon="contact"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="password"
        :type="type"
        name="密码"
        label="密码"
        placeholder="密码"
        :left-icon="eye"
        @click-left-icon="open_eye()"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="button" @click="register">注册</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import registerApi from "@/api/register"; //引入登录数据请求接口
export default {
  data() {
    return {
      username: "",
      password: "",
      type: "password",
      eye: "closed-eye"
    };
  },
  methods: {
    onClickLeft() {
      this.$router.push({ path: "/Login" });
    },
    onSubmit(values) {
      console.log("submit", values);
    },
    //密码框从password变成text
    open_eye() {
      this.type = this.type === "password" ? "text" : "password";
      this.eye = this.eye === "closed-eye" ? "eye-o" : "closed-eye";
    },
    //注册，与后台数据库进行联系
    register() {
      registerApi
        .registerData(this.username, this.password)
        .then(response => {
          if (response.data.flag) {
            //根据返回的布尔值判断
            this.$dialog
              .alert({
                message: response.data.message
              })
              .then(() => {
                this.$router.push({ path: "/login" });
              });
          } else {
            this.$dialog
              .alert({
                message: response.data.message
              })
              .then(() => {
                this.username = "";
                this.password = "";
              });
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style>
</style>