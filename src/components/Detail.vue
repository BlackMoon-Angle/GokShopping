<template>
  <div class="detail_box">
    <!-- 头部导航 -->
    <van-nav-bar
      title="商品"
      left-text="返回"
      right-text="前往购物车"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <!-- 轮播图：商品图片展示 -->
    <van-swipe class="van_swipe" :autoplay="3000">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image" />
      </van-swipe-item>
    </van-swipe>
    <!-- 商品名称，价格 -->
    <div class="name_price">
      <div class="n_p_box">
        <h3>{{detail_name}}</h3>
        <div class="price">
          <span>¥ {{detail_pri}}</span>
        </div>
      </div>
    </div>
    <!-- 售后保障 -->
    <div class="after_sales">
      <div class="as_box">
        <span class="periphery">官方周边</span>
        <span class="guarantee">售后保障</span>
      </div>
    </div>
    <!-- 用户评分 -->
    <div class="score">
      <div class="score_box">
        <span>用户评分</span>
        <van-rate v-model="score_value" />
      </div>
    </div>
  </div>
</template>

<script>
import request from "@/utils/request"; // @代表 ./src
export default {
  data() {
    return {
      score_value: 0,
      detail_name: "", //商品名称
      detail_pri: "", //商品价格
      images: [
        //商品图片——轮播
      ]
    };
  },
  methods: {
    onClickLeft() {
      this.$router.push({ path: "/Classification" });
    },
    onClickRight() {
      this.$router.push({ path: "/ShoppingCart" });
    },
    detail_data() {
      //数据请求
      request
        .get("http://localhost:8080/json/Detail.json")
        .then(response => {
          let data = response.data[0].detail;// eslint-disable-line no-unused-vars
          data.forEach(item => {
            if (item.detail_id == this.$route.params.id) {
              this.detail_name = item.name;
              this.detail_pri = item.pri;
              this.images = item.img;
            }
          });
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  created: function() {
    this.detail_data();
  }
};
</script>

<style lang="scss">
@import "/css/common.css";
@import "@/scss/Detail.scss";
</style>