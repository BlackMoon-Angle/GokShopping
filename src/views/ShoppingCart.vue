<template>
  <div>
    <!-- 购物车为空时 -->
    <section class="empty_cart" v-if="empty_cart">
      <div class="box">
        <i></i>
        <div class="text">购物车好空呀,快去选购吧</div>
        <a>去逛逛</a>
      </div>
    </section>
    <!-- 购物车不为空 -->
    <section class="shop_cart" v-if="shop_cart">
      <van-checkbox
        class="van_head"
        v-model="this.$store.state.VueX_ShopCart.all_checked"
        @click.native="AllSelect_goods()"
      >
        <div class="van_img">
          <img src="https://game.gtimg.cn/images/daoju/base/logo/biz/yxzj.png" alt />
        </div>
        <p class="van_text">王者荣耀供应商:官方商城</p>
      </van-checkbox>
      <!-- 主信息 -->
      <div
        :id="item.cart_id"
        class="main"
        v-for="(item) in this.$store.state.VueX_ShopCart.ShopCartInfo"
        :key="item.cart_id"
      >
        <van-checkbox
          class="van_main"
          v-model="item.checked"
          @click.native="select_goods(item.cart_id)"
        >
          <a href="#" class="main_img">
            <img :src="item.img" alt />
          </a>
        </van-checkbox>
        <!-- 商品信息 -->
        <div class="info">
          <p>{{item.name}}</p>
          <h4>¥ {{item.new_pri}}</h4>
        </div>
        <!-- 商品信息操作 -->
        <div class="info_operation">
          <a @click="delete_goods(item.cart_id)">×</a>
          <van-stepper
            v-model="item.buy_num"
            @plus="add_BuyNum(item.cart_id)"
            @minus="reduce_BuyNum(item.cart_id)"
          />
        </div>
      </div>
      <van-submit-bar :price="total_price * 100" button-text="提交订单" />
    </section>

    <!-- 提示弹出框 -->
    <!-- 提示弹出框 -->
    <van-notify v-model="show_success" type="success">
      <span>删除商品成功</span>
    </van-notify>
    <van-notify v-model="show_fail" type="danger">
      <span>删除商品失败</span>
    </van-notify>
  </div>
</template>

<script>
export default {
  data() {
    return {
      empty_cart: true, //购物车为空时
      shop_cart: false, //购物车不为空时
      show_success: false, //成功时
      show_fail: false, //失败时
      total_price: this.$store.state.VueX_ShopCart.Total_price,
      all_checked: false
    };
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
    ShopCart_data() {
      if (this.$store.state.VueX_ShopCart.ShopCartInfo.length == 0) {
        this.empty_cart = true;
        this.shop_cart = false;
        this.$dialog.alert({
          message: "购物车是空的哦！快去购物吧！"
        });
      } else {
        this.empty_cart = false;
        this.shop_cart = true;
      }
    },
    //添加购买数量
    add_BuyNum(add_id) {
      this.$store.dispatch("add_num", add_id);
    },
    //减少购买数量
    reduce_BuyNum(reduce_id) {
      this.$store.dispatch("reduce_num", reduce_id);
    },
    //删除商品
    delete_goods(delete_id) {
      this.$store.dispatch("delete", delete_id);
      this.showNotify();
    },
    //单个选择商品
    select_goods(select_id) {
      this.$store.dispatch("select", select_id);
    },
    // 全选商品
    AllSelect_goods() {
      this.$store.dispatch("select_all");
    }
  },
  created: function() {
    this.ShopCart_data();
  }
};
</script>

<style lang="scss">
@import "/css/common.css";
@import "@/scss/ShoppingCart.scss";
</style>