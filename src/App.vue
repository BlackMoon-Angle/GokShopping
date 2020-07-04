<template>
  <div id="app">
    <!-- 主要路由 -->
    <router-view />
    <van-tabbar
      v-model="active"
      v-if="$route.name != 'Detail' && $route.name != 'Login' && $route.name != 'Register' && $route.name !='ModifyPassword' "
    >
      <van-tabbar-item icon="wap-home-o" replace to="/Home" name="Home">首页</van-tabbar-item>
      <van-tabbar-item icon="shop-o" to="/Classification" name="Classification">分类</van-tabbar-item>
      <van-tabbar-item
        icon="cart-o"
        :badge="badge_boolean ? $store.getters.Shop_num : 0"
        to="/ShoppingCart"
        name="ShoppingCart"
      >购物车</van-tabbar-item>
      <van-tabbar-item icon="user-o" to="/User" name="User">我的</van-tabbar-item>
    </van-tabbar>
    <!-- 购物车导航 -->
    <van-goods-action v-if="$route.name == 'Detail'">
      <van-goods-action-icon icon="shop-o" text="店铺" />
      <van-goods-action-icon icon="service-o" text="客服" />
      <van-goods-action-icon icon="like-o" text="收藏" />
      <van-goods-action-button color="#333" type="warning" text="加入购物车" @click="ShopCart_data" />
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
import loginApi from "@/api/login"; //引入登录数据请求接口
import shopcartApi from "@/api/shopcart"; //引入购物车数据请求接口
import { getToken, setToken, getUser, setUser, logOut } from "@/utils/auth"; //引入相关方法用于对本地存储进行数据的操作
import request from "@/utils/request"; // @代表 ./src
export default {
  data() {
    return {
      // ShopCartMongo: "", //一开始请求，准备好的数据
      route_navigation: true, //路由导航
      product_navigation: false, //商品导航
      active: this.$route.name,
      badge_boolean: false //用于未登录时，购物车的左上角数应该显示为0
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
      //购物车数据请求
      shopcartApi
        .shopcartData()
        .then(response => {
          // this.ShopCartMongo = response.data
          this.Deatil_cart(response.data);
        })
        .catch(err => {
          console.log(err);
        });
    },
    Deatil_cart(ShopCartMongo) {
      //详细页添加到购物车时的通信
      let storage = getToken();
      loginApi
        .token_login(storage)
        .then(response => {
          if (response.data.flag) {
            ShopCartMongo.forEach(item => {
              if (this.$route.params.id == item.cart_id) {
                this.$store.dispatch("add_shop", item);
              }
            });
          } else {
            this.$dialog
              .alert({
                message: "未登录用户，请前往登录！"
              })
              .then(() => {
                this.$router.push({ path: "/Login" });
              });
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    badge_num() {
      let storage = getToken();
      if (storage == null) {
        this.badge_boolean = false;
      } else {
        loginApi
          .token_login(storage)
          .then(response => {
            if (response.data.flag) {
              this.badge_boolean = true;
            }
          })
          .catch(err => {
            console.log(err);
          });
      }
    }
  },
  watch: {
    $route() {
      //跳转到该页面后需要进行的操作
      // this.ShopCart_data();
      this.badge_num();
      this.active = this.$route.name;
    }
  },
  created: function() {
    // this.ShopCart_data();
    this.badge_num();
  }
};
</script>
