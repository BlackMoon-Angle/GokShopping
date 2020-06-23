<template>
  <div class="main">
    <!-- 单元格 -->
    <van-cell class="user" title="游客" icon="https://shp.qlogo.cn/daoju/9999/9999_1/0" is-link />
    <van-cell title="我的订单" is-link value="全部订单" />
    <!-- 订单 -->
    <van-grid :border="false" :column-num="5">
      <van-grid-item>
        <van-grid-item class="van1" icon="''" text="待付款" />
      </van-grid-item>
      <van-grid-item>
        <van-grid-item class="van2" icon="''" text="待发货" />
      </van-grid-item>
      <van-grid-item>
        <van-grid-item class="van3" icon="''" text="待收货" />
      </van-grid-item>
      <van-grid-item>
        <van-grid-item class="van4" icon="''" text="待评价" />
      </van-grid-item>
      <van-grid-item>
        <van-grid-item class="van5" icon="''" text="退换货" />
      </van-grid-item>
    </van-grid>
    <!-- 单元格 -->
    <van-cell title="我的收藏" icon="https://shp.qlogo.cn/daoju/9999/9999_1/0" is-link />
    <van-cell title="我的收藏" icon="https://shp.qlogo.cn/daoju/9999/9999_1/0" is-link />
    <van-cell title="我的收藏" icon="https://shp.qlogo.cn/daoju/9999/9999_1/0" is-link />
    <van-cell title="我的收藏" icon="https://shp.qlogo.cn/daoju/9999/9999_1/0" is-link />
    <van-cell title="我的收藏" icon="https://shp.qlogo.cn/daoju/9999/9999_1/0" is-link />
    <van-cell title="我的收藏" icon="https://shp.qlogo.cn/daoju/9999/9999_1/0" is-link />
    <van-cell title="我的收藏" icon="https://shp.qlogo.cn/daoju/9999/9999_1/0" is-link />
    <van-cell title="我的收藏" icon="https://shp.qlogo.cn/daoju/9999/9999_1/0" is-link />
    <van-cell title="我的收藏" icon="https://shp.qlogo.cn/daoju/9999/9999_1/0" is-link />
  </div>
</template>

<script>
export default {
};
</script>

<style lang="scss">
@import "/css/common.css";
@import "@/scss/User.scss";
</style>