<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view />
    <van-tabbar v-model="active">
      <van-tabbar-item icon="wap-home-o" replace to="/Home">首页</van-tabbar-item>
      <van-tabbar-item icon="shop-o">分类</van-tabbar-item>
      <van-tabbar-item icon="cart-o" badge="0">购物车</van-tabbar-item>
      <van-tabbar-item icon="user-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<style lang="scss">
body{
  background-color: #F0F0F0;
}
</style>
<script>
export default {
  data() {
    return {
      active: "home"
    };
  }
};
</script>
