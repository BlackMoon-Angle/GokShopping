<template>
  <div>
    <!-- 搜索框 -->
    <van-search v-model="value" shape="round" background="#202020" placeholder="请输入搜索关键词" />
    <!-- 轮播图 -->
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<style lang="scss">
@function vw($px) {
  @return ($px / 750) * 100vw;
}
.van-swipe .van-swipe-item {
  margin-top: vw(10);
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
  border-radius: vw(10);
  width: vw(1060);
  height: vw(350);

  img {
    border-radius: vw(10);
    width: 100%;
    height: 100%;
  }
}
</style>
<script>
export default {
  data() {
    return {
      value: "",
      images: [
        "https://game.gtimg.cn/images/daojushop/zb/ad/202006/20200613000834_912219.jpg",
        "https://game.gtimg.cn/images/daojushop/zb/ad/202006/20200617172623_399874.jpg",
        "https://game.gtimg.cn/images/daojushop/zb/ad/202006/20200610190601_810232.jpg",
        "https://game.gtimg.cn/images/daojushop/zb/ad/202006/20200601090706_468644.jpg"
      ]
    };
  }
};
</script>
