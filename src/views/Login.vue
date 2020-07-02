<template>
  <div>
    <!-- 头部导航 -->
    <van-nav-bar
      title="登录"
      left-text="返回"
      right-text="没有账号？前往注册！"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
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
      <div class="modify_password">
        <router-link to="/ModifyPassword">
          <span>修改密码</span>
        </router-link>
      </div>
      <div style="margin-top: 0px;">
        <van-button round block type="info" native-type="submit">登录</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
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
      this.$router.push({ path: "/User" });
    },
    onClickRight() {
      this.$router.push({ path: "/Register" });
    },
    onSubmit(values) {
      console.log("submit", values);
    },
    //密码框从password变成text
    open_eye() {
      this.type = this.type === "password" ? "text" : "password";
      this.eye = this.eye === "closed-eye" ? "eye-o" : "closed-eye";
    }
  }
};
</script>

<style lang="scss">
$design-width: 750; //设计稿width

@function rem($px) {
  @return $px / $design-width * 10 + rem;
}
body {
  background: #f4f4f4;
}
.van-nav-bar {
  .van-nav-bar__right {
    .van-nav-bar__text {
      font-size: rem(25);
    }
  }
}
.van-form {
  margin-top: rem(40);
}
.modify_password {
  width: 100%;
  height: rem(80);
  line-height: rem(80);
  text-align: right;

  span {
    margin-right: rem(30);
    color: #1989fa;
    font-size: rem(30);
  }
}
</style>