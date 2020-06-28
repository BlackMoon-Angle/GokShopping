<template>
  <div>
    <!-- 购物车为空时 -->
    <section class="empty_cart">
      <div class="box">
        <i></i>
        <div class="text">购物车好空呀,快去选购吧</div>
        <a href="#">去逛逛</a>
      </div>
    </section>
    <!-- 购物车不为空 -->
    <section class="shop_cart">
      <van-checkbox class="van_head" v-model="checked">
        <div class="van_img">
          <img src="https://game.gtimg.cn/images/daoju/base/logo/biz/yxzj.png" alt />
        </div>
        <p class="van_text">王者荣耀供应商:官方商城</p>
      </van-checkbox>
      <!-- 主信息 -->
      <div class="main">
        <van-checkbox class="van_main" v-model="checked">
          <a href="#" class="main_img">
            <img
              src="https://game.gtimg.cn/images/zb/x5/uploadImg/goods/201910/20191017152303_40971.jpg"
              alt
            />
          </a>
        </van-checkbox>
        <!-- 商品信息 -->
        <div class="info">
          <p>游园惊梦甄姬Q版手办</p>
          <h4>¥258.00</h4>
        </div>
        <!-- 商品信息操作 -->
        <div class="info_operation">
          <a href="#">×</a>
          <van-stepper v-model="value" />
        </div>
      </div>

      <van-submit-bar :price="total_price * 100" button-text="提交订单" />
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: 1,
      total_price: 258.0,
      checked: false
    };
  },
  methods: {}
};
</script>

<style lang="scss">
@import "/css/common.css";
@import "@/scss/ShoppingCart.scss";
</style>