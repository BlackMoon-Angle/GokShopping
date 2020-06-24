<template>
  <div class="main">
    <!-- 单元格 -->
    <van-cell class="user" title="登录" icon="https://shp.qlogo.cn/daoju/9999/9999_1/0" is-link />
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
    <van-cell class="cell" title="我的收藏" icon="''" is-link />
    <van-cell class="cell2" title="优惠卡卷" icon="''" is-link />
    <van-cell class="cell3" title="地址管理" icon="''" is-link />
    <van-cell class="cell4" title="领取中心" icon="''" is-link />
    <van-cell class="cell5" title="订阅中心" icon="''" is-link />
    <van-cell class="cell6" title="我的评价" icon="''" is-link />
    <van-cell class="cell7" title="常见问题" icon="''" is-link />
    <van-cell class="cell8" title="意见反馈" icon="''" is-link />
    <van-cell class="cell9" title="商城公告" icon="''" is-link />
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      username: "",
      password: ""
    };
  },
  methods: {
    onSubmit(values) {
      console.log("submit", values);
    }
  }
};
</script>

<style lang="scss">
@import "/css/common.css";
@import "@/scss/User.scss";
</style>