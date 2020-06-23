<template>
  <div id="app">
    <router-view />
    <van-tabbar v-model="active">
      <van-tabbar-item icon="wap-home-o" replace to="/Home">首页</van-tabbar-item>
      <van-tabbar-item icon="shop-o" to="/Classification">分类</van-tabbar-item>
      <van-tabbar-item icon="cart-o" badge="0" to="/ShoppingCart">购物车</van-tabbar-item>
      <van-tabbar-item icon="user-o" to="/User">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<style lang="scss">
$design-width:750; //设计稿width

@function rem($px) {
  @return $px / $design-width * 10+rem;
}
body{
  #app{
    padding-bottom: rem(120);
  }
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
