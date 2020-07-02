<template>
  <div>
    <!-- 头部导航 -->
    <van-nav-bar title="修改密码" left-text="返回" left-arrow @click-left="onClickLeft" />
    <van-form @submit="onSubmit">
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
        v-model="new_password"
        :type="type2"
        name="新密码"
        label="新密码"
        placeholder="新密码"
        :left-icon="eye2"
        @click-left-icon="open_eye2()"
        :rules="[{ required: true, message: '请填写新密码' }]"
      />
      <van-field
        v-model="confirm_password"
        :type="type3"
        name="确认新密码"
        label="确认新密码"
        placeholder="确认新密码"
        :left-icon="eye3"
        @click-left-icon="open_eye3()"
        :rules="[{ required: true, message: '请确认新密码' }]"
      />
      <div class="modify_btn">
        <van-button round block type="info" native-type="submit">确认修改</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      old_password: "",
      new_password: "",
      confirm_password: "",
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
    }
  }
};
</script>

<style>
.modify_btn{
    margin-top: 20px;
}
</style>