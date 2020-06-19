<template>
  <div>
    <!-- 搜索框 -->
    <van-search v-model="value" shape="round" background="#cd4848" placeholder="请输入搜索关键词" />
    <!-- 轮播图 -->
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image" />
      </van-swipe-item>
    </van-swipe>
    <!-- 导航 -->
    <van-grid>
      <van-grid-item
        icon="https://game.gtimg.cn/images/daojushop/zb/ad/202006/20200615154412_976473.png"
        text="鲜货上架"
      />
      <van-grid-item
        icon="https://game.gtimg.cn/images/daojushop/zb/ad/202006/20200615154419_298519.png"
        text="服饰专区"
      />
      <van-grid-item
        icon="https://game.gtimg.cn/images/daojushop/zb/ad/202006/20200615154424_209814.png"
        text="毛绒玩偶"
      />
      <van-grid-item
        icon="https://game.gtimg.cn/images/daojushop/zb/ad/202006/20200615154430_815866.png"
        text="生活用品"
      />
    </van-grid>
    <!-- 广告 -->
    <section class="advertisement">
      <a href>
        <img
          src="https://game.gtimg.cn/images/daojushop/zb/ad/202004/20200427093656_278646.png"
          alt
        />
      </a>
      <a href>
        <img
          src="https://game.gtimg.cn/images/daojushop/zb/ad/202006/20200618095840_211199.png"
          alt
        />
      </a>
    </section>
    <!-- 广告2 -->
    <a href="#" class="advertisement2">
      <img src="https://game.gtimg.cn/images/daojushop/zb/ad/202006/20200615155036_831086.gif" alt />
    </a>
    <!-- 专场1 -->
    <div class="special">
      <div>
        
      </div>
    </div>
    <!-- 专场2 -->
    <div class="special2">
      <div>
        
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "/css/common.css";
@import "@/scss/Home.scss";
</style>
<script>
export default {
  data() {
    return {
      value: "",
      images: [
        "https://game.gtimg.cn/images/daojushop/zb/ad/202006/20200615163513_171904.jpg",
        "https://game.gtimg.cn/images/daojushop/zb/ad/202004/20200423182404_197766.png",
        "https://game.gtimg.cn/images/daojushop/zb/ad/202006/20200615154709_248262.jpg",
        "https://game.gtimg.cn/images/daojushop/zb/ad/202006/20200617165911_497123.png",
        "https://game.gtimg.cn/images/daojushop/zb/ad/202006/20200616110817_649495.jpg"
      ]
    };
  }
};
</script>
