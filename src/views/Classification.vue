<template>
  <div>
    <div class="list" v-if="list_box">
      <!-- 吸顶 -->
      <van-sticky>
        <!-- 搜索 -->
        <van-search v-model="value" shape="round" background="#fff" placeholder />
        <!-- 下拉菜单 -->
        <van-dropdown-menu active-color="#000000">
          <van-dropdown-item v-model="value1" :options="option1" @click.native="default_data" />
          <van-dropdown-item v-model="value2" :options="option2" @click.native="classification" />
          <van-dropdown-item
            v-model="value3"
            :options="option3"
            @click.native="Ascending_Descending"
          />
        </van-dropdown-menu>
      </van-sticky>
      <!-- 首页渲染的商品列表 -->
      <section class="commodity_list">
        <section class="commodity">
          <ul class="commodity_ul">
            <li
              v-for="(item) in commoditylist"
              :key="item.shop_id"
              :id="item.shop_id"
              @click="router_detail(item.shop_id)"
            >
              <div class="li_img">
                <lazy-component>
                  <img :src="item.img" alt />
                </lazy-component>
              </div>
              <div class="li_name_price">
                <div class="li_name">
                  <h5>{{item.name}}</h5>
                </div>
                <div class="li_price">
                  <p>¥{{item.new_pri}}</p>
                </div>
              </div>
            </li>
          </ul>
        </section>
      </section>
    </div>
    <div class="detail" v-if="detail_box">
      <router-view />
    </div>
  </div>
</template>

<script>
import request from "@/utils/request"; // @代表 ./src
import classificationApi from "@/api/classification";//引入列表页数据请求接口
export default {
  data() {
    return {
      list_box: true,
      detail_box: false,
      commoditylist: "", //遍历目标
      commoditylist2: "", //用于分类、返回默认排序
      value: "",
      value1: "default",
      value2: "a",
      value3: "default",
      value4: "a",
      option1: [{ text: "默认", value: "default" }],
      option2: [
        { text: "分类", value: "a" },
        { text: "精品手办", value: "model" },
        { text: "数码3C", value: "digital" },
        { text: "生活周边", value: "periphery" },
        { text: "服装服饰", value: "clothes" }
      ],
      option3: [
        { text: "默认排序", value: "default" },
        { text: "价格升序", value: "Ascending_order" },
        { text: "价格降序", value: "Descending_order" }
      ]
    };
  },
  watch: {
    $route(to) {
      switch (to.fullPath) {
        case "/Classification":
          this.list_box = true;
          this.detail_box = false;
          break;
        case "/Classification/Detail":
          this.list_box = false;
          this.detail_box = true;
          break;
      }
    }
  },
  methods: {
    //请求mongodb数据中的classification集合数据
    classificationData() {
      classificationApi
        .classificationData()
        .then(response => {
          this.commoditylist = response.data;
          this.commoditylist2 = response.data;
        })
        .catch(err => {
          console.log(err);
        });
    },
    //默认按钮
    default_data() {
      this.commoditylist = this.commoditylist2;
    },
    //价格升降序
    Ascending_Descending() {
      let data = this.commoditylist; // eslint-disable-line no-unused-vars
      switch (this._data.value3) {
        case "Ascending_order": //升序
          data.sort((a, b) => {
            //排序基于的数据
            return b.new_pri - a.new_pri;
          });
          this.commoditylist = data;
          break;
        case "Descending_order": //降序
          data.sort((a, b) => {
            //排序基于的数据
            return a.new_pri - b.new_pri;
          });
          this.commoditylist = data;
          break;
        case "default": //默认排序
          data.sort((a, b) => {
            return (a = b);
          });
          this.commoditylist = data;
          break;
      }
    },
    // 分类
    classification() {
      let data = this.commoditylist2; // eslint-disable-line no-unused-vars
      let data2 = []; // eslint-disable-line no-unused-vars
      switch (this._data.value2) {
        case "model": //手办类
          data.forEach(item => {
            if (item.type === "model") {
              data2.push(item);
            }
          });
          this.commoditylist = data2;
          break;
        case "digital": //数码类
          data.forEach(item => {
            if (item.type === "digital") {
              data2.push(item);
            }
          });
          this.commoditylist = data2;
          break;
        case "periphery": //周边类
          data.forEach(item => {
            if (item.type === "periphery") {
              data2.push(item);
            }
          });
          this.commoditylist = data2;
          break;
        case "clothes": //服饰类
          data.forEach(item => {
            if (item.type === "clothes") {
              data2.push(item);
            }
          });
          this.commoditylist = data2;
          break;
      }
    },
    //列表页跳转到详细页
    //将id传到详细页
    router_detail(e_id) {
      this.$router.push({ path: "Detail/" + e_id });
    }
  },
  created: function() {
    this.classificationData();
  }
};
</script>

<style lang="scss">
@import "/css/common.css";
@import "@/scss/Classification.scss";
</style>