<template>
  <div id="app">
    <!-- 主要路由 -->
    <router-view />
    <van-tabbar v-model="active" v-if="$route.name != 'Detail' && $route.name != 'Login' && $route.name != 'Register' && $route.name !='ModifyPassword' ">
      <van-tabbar-item icon="wap-home-o" replace to="/Home" name="Home">首页</van-tabbar-item>
      <van-tabbar-item icon="shop-o" to="/Classification" name="Classification">分类</van-tabbar-item>
      <van-tabbar-item icon="cart-o" :badge="$store.getters.Shop_num" to="/ShoppingCart" name="ShoppingCart">购物车</van-tabbar-item>
      <van-tabbar-item icon="user-o" to="/User" name="User">我的</van-tabbar-item>
    </van-tabbar>
    <!-- 购物车导航 -->
    <van-goods-action v-if="$route.name == 'Detail'">
      <van-goods-action-icon icon="shop-o" text="店铺" />
      <van-goods-action-icon icon="service-o" text="客服" />
      <van-goods-action-icon icon="like-o" text="收藏" />
      <van-goods-action-button color="#333" type="warning" text="加入购物车" @click="Deatil_cart" />
      <van-goods-action-button color="#7232dd" type="danger" text="立即购买" />
    </van-goods-action>
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
import request from "@/utils/request"; // @代表 ./src
export default {
  data() {
    return {
      ShopCartJson: "", //一开始请求，准备好的数据
      route_navigation: true, //路由导航
      product_navigation: false, //商品导航
      active: this.$route.name
    };
  },
  methods: {
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
    },
    ShopCart_data() {
      //数据请求
      request
        .get("http://localhost:8080/json/ShopCart.json")
        .then(response => {
          this.ShopCartJson = response.data;
        })
        .catch(err => {
          console.log(err);
        });
    },
    Deatil_cart() {
      //详细页添加到购物车时的通信
      this.ShopCartJson.forEach(item => {
        if (this.$route.params.id == item.cart_id) {
          this.$store.dispatch("add_shop", item);
        }
      });
    }
  },
  created: function() {
    this.ShopCart_data();
  }
};
</script>
