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
      <van-goods-action-button color="#333" type="warning" text="加入购物车" @click="Deatil_cart" />
      <van-goods-action-button color="#7232dd" type="danger" text="立即购买" />
    </van-goods-action>
    <!-- 提示弹出框 -->
    <van-notify v-model="show_success" type="success">
      <span>添加购物车成功</span>
    </van-notify>
    <van-notify v-model="show_fail" type="danger">
      <span>添加购物车失败</span>
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
import request from "@/utils/request"; // @代表 ./src
 import { mapActions } from 'vuex' //引入方法
let ShopCartInfo = {
  getData() {
    //获取数据
    let list = localStorage.getItem("ShopCartInfo");
    if (list) {
      return JSON.parse(list);
    } else {
      return [];
    }
  },
  setData(data) {
    //保存数据
    localStorage.setItem("ShopCartInfo", JSON.stringify(data));
  }
};
export default {
  data() {
    return {
      ShopCartInfo: ShopCartInfo.getData(), //加入购物车的商品数据
      ShopCartJson: "", //一开始请求，准备好的数据
      show_success: false, //加入成功时
      show_fail: false, //加入失败时
      route_navigation: true, //路由导航
      product_navigation: false, //商品导航
      active: 0
    };
  },
  watch: {
    //监听
    ShopCartInfo: {
      deep: true, //进行深度监听
      handler(new_data) {
        //固定属性名
        ShopCartInfo.setData(new_data); //将输入的内容存放
        // console.log(new_data);
      }
    }
  },
  methods: {
    showNotify() {
      //成功
      this.show_success = true;
      setTimeout(() => {
        this.show_success = false;
      }, 2000);
    },
    showNotify2() {
      //失败
      this.show_fail = true;
      setTimeout(() => {
        this.show_fail = false;
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
    ...mapActions(['add_shop']),   //es6的扩展运算符
    Deatil_cart() {
      console.log(this.add_shop())
      // this.ShopCartJson.forEach(item => {
      //   if (this.$route.params.id == item.cart_id) {
      //     this.add_shop(item)
      //   }
      // })
      //详细页添加到购物车时的通信
      // this.ShopCartJson.forEach(item => {
      //   if (this.$route.params.id == item.cart_id) {
      //     // this.ShopCartInfo.push(item);
      //     let exits = this.ShopCartInfo.some(item2 => {
      //       //判断数据中是否已存在此商品
      //       // eslint-disable-line no-unused-vars
      //       return item.cart_id == item2.cart_id;
      //     });

      //     if (exits) {
      //       //如果存在
      //       // eslint-disable-line no-unused-vars
      //       this.$dialog.alert({
      //         message: "商品已加入到购物车，请到购物车中确认！"
      //       });
      //     } else {
      //       this.ShopCartInfo.push(item);
      //       this.showNotify();
      //     }
      //   }
      // });
    }
  },
  created: function() {
    this.ShopCart_data();
  }
};
</script>
