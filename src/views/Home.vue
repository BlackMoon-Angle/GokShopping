<template>
  <div>
    <!-- 通知栏 -->
    <van-notice-bar left-icon="volume-o" text="白玉神驹合金车模限量编号版名单公示与说明。  王者荣耀周边商城手办热销中!" />
    <!-- 轮播图 -->
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image" />
      </van-swipe-item>
    </van-swipe>
    <!-- 宫格导航 -->
    <van-grid>
      <van-grid-item
        icon="https://game.gtimg.cn/images/daojushop/zb/ad/201804/20180418190939_668278.png"
        text="全部周边"
      />
      <van-grid-item
        icon="https://game.gtimg.cn/images/daojushop/zb/ad/201804/20180418190952_334384.png"
        text="新品尝鲜"
      />
      <van-grid-item
        icon="https://game.gtimg.cn/images/daojushop/zb/ad/201804/20180418191003_538284.png"
        text="人气爆款"
      />
      <van-grid-item
        icon="https://game.gtimg.cn/images/daojushop/zb/ad/201804/20180418191015_868942.png"
        text="生活用品"
      />
    </van-grid>
    <!-- 首页渲染的商品列表 -->
    <section class="commodity_list">
      <section class="commodity" v-for="(item, index) in commoditylist" :key="index">
        <div class="commodity_title">
          <h3>{{item.title}}</h3>
        </div>
        <ul class="commodity_ul">
          <li v-for="(item2, index2) in item.commodity" :key="index2">
            <div class="li_img">
              <lazy-component>
                <img :src="item2.img" alt />
              </lazy-component>
            </div>
            <div class="li_name_price">
              <div class="li_name">
                <h5>{{item2.name}}</h5>
              </div>
              <div class="li_price">
                <p>¥ {{item2.price}}</p>
              </div>
            </div>
          </li>
        </ul>
      </section>
    </section>
  </div>
</template>

<style lang="scss">
@import "/css/common.css";
@import "@/scss/Home.scss";
</style>
<script>
import request from "@/utils/request"; // @代表 ./src
import homeApi from "@/api/home"; //引入首页数据请求接口
var page = 1; //用于懒加载
export default {
  data() {
    return {
      commoditylist: "",
      images: [
        "https://game.gtimg.cn/images/daojushop/zb/ad/202004/20200422094735_232852.jpg",
        "https://game.gtimg.cn/images/daojushop/zb/ad/202004/20200422094741_322028.jpg",
        "https://game.gtimg.cn/images/daojushop/zb/ad/202004/20200422094853_137630.jpg",
        "https://game.gtimg.cn/images/daojushop/zb/ad/202004/20200422094747_872520.jpg",
        "https://game.gtimg.cn/images/daojushop/zb/ad/202004/20200422094939_704763.png"
      ]
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    //请求mongodb数据中的home集合数据
    homeData() {
      homeApi
        .homeData()
        .then(response => {
          if (page >= response.data.length) {
            page = response.data.length;
            this.commoditylist = response.data.slice(0, page);
          } else {
            this.commoditylist = response.data.slice(0, page);
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    //滚动条触底事件
    handleScroll() {
      var scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      //变量scrollHeight是滚动条的总高度
      var scrollHeight =
        document.documentElement.scrollHeight || document.body.scrollHeight;
      if (
        Math.round(
          scrollTop + document.documentElement.clientHeight ||
            document.body.clientHeight
        ) == scrollHeight
      ) {
        page++;
        this.homeData();
      }
    }
  },
  created: function() {
    this.homeData();
  }
};
</script>
