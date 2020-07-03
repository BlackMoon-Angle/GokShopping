<template>
  <div>
    <!-- 头部导航 -->
    <van-nav-bar title="修改密码" left-text="返回" left-arrow @click-left="onClickLeft" />
    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="确认用户名"
        label="确认用户名"
        placeholder="确认用户名"
        left-icon="contact"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="old_password"
        :type="type"
        name="原密码"
        label="原密码"
        placeholder="原密码"
        :left-icon="eye"
        @click-left-icon="open_eye()"
        :rules="[{ required: true, message: '请填写原密码' }]"
      />
      <van-field
      class="password_text"
        v-model="new_password"
        :type="type2"
        name="新密码"
        label="新密码"
        placeholder="新密码"
        :left-icon="eye2"
        @click-left-icon="open_eye2()"
        :rules="[{ required: true, message: '请填写新密码' }]"
      />
      <div class="modify_btn">
        <van-button round block type="info" native-type="button" @click="modifyData">确认修改</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import modifyApi from "@/api/modify"; //引入登录数据请求接口
export default {
  data() {
    return {
      username: "",
      old_password: "",
      new_password: "",
      type: "password",
      eye: "closed-eye",
      type2: "password",
      eye2: "closed-eye",
      type3: "password",
      eye3: "closed-eye"
    };
  },
  methods: {
    onClickLeft() {
      this.$router.push({ path: "/Login" });
    },
    onSubmit(values) {
      console.log("submit", values);
    },
    open_eye() {
      this.type = this.type === "password" ? "text" : "password";
      this.eye = this.eye === "closed-eye" ? "eye-o" : "closed-eye";
    },
    open_eye2() {
      this.type2 = this.type2 === "password" ? "text" : "password";
      this.eye2 = this.eye2 === "closed-eye" ? "eye-o" : "closed-eye";
    },
    open_eye3() {
      this.type3 = this.type3 === "password" ? "text" : "password";
      this.eye3 = this.eye3 === "closed-eye" ? "eye-o" : "closed-eye";
    },
    //修改密码，与后台数据库进行联系
    modifyData() {
      modifyApi
        .modifyData(this.username, this.old_password, this.new_password)
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
                this.old_password = "";
                this.new_password = "";
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
.modify_btn {
  margin-top: 20px;
}
.password_text {
  margin-top: 20px;
}
</style>