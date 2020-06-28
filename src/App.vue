<template>
  <div id="app">
    <!-- 主要路由 -->
    <router-view />
    <van-tabbar v-model="active" v-if="$route.name != 'Detail'">
      <van-tabbar-item icon="wap-home-o" replace to="/Home">首页</van-tabbar-item>
      <van-tabbar-item icon="shop-o" to="/Classification">分类</van-tabbar-item>
      <van-tabbar-item icon="cart-o" badge="0" to="/ShoppingCart">购物车</van-tabbar-item>
      <van-tabbar-item icon="user-o" to="/User">我的</van-tabbar-item>
    </van-tabbar>
    <!-- 购物车导航 -->
    <van-goods-action v-if="$route.name == 'Detail'">
      <van-goods-action-icon icon="shop-o" text="店铺" />
      <van-goods-action-icon icon="service-o" text="客服" />
      <van-goods-action-icon icon="like-o" text="收藏" />
      <van-goods-action-button color="#333" type="warning" text="加入购物车" @click="showNotify" />
      <van-goods-action-button color="#7232dd" type="danger" text="立即购买" />
    </van-goods-action>
    <!-- 提示弹出框 -->
    <van-notify v-model="show" type="success">
      <span>添加购物车成功</span>
    </van-notify>
  </div>
</template>

<style lang="scss">
$design-width: 750; //设计稿width
.van-goods-action {
  z-index: 1;
}

@function rem($px) {
  @return $px / $design-width * 10 + rem;
}
body {
  #app {
    padding-bottom: rem(120);
  }
}
</style>
<script>
export default {
  data() {
    return {
      show: false,
      route_navigation: true, //路由导航
      product_navigation: false, //商品导航
      active: "home"
    };
  },
  methods: {
    showNotify() {
      this.show = true;
      setTimeout(() => {
        this.show = false;
      }, 2000);
    },
    Route_navigation() {
      switch (this.$route.name) {
        case "/Classification":
          this.route_navigation = true;
          this.product_navigation = false;
          break;
        case "/Detail":
          this.route_navigation = false;
          this.product_navigation = true;
          break;
      }
    }
  }
};
</script>
