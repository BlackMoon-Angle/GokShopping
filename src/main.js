import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Vuex from 'vuex'
import 'lib-flexible/flexible'
/*---------------------------------Vant组件库--------------------------------- */
//搜索框组件
import { Search } from 'vant';
Vue.use(Search);

//Layout布局组件
import { Col, Row } from 'vant';
Vue.use(Col);
Vue.use(Row);

//底部标签栏组件
import { Tabbar, TabbarItem } from 'vant';
Vue.use(Tabbar);
Vue.use(TabbarItem);

//矢量图标组件
import { Icon } from 'vant';
Vue.use(Icon);

//轮播图组件
import { Swipe, SwipeItem } from 'vant';
Vue.use(Swipe);
Vue.use(SwipeItem);

//轮播图懒加载组件
import { Lazyload } from 'vant';
Vue.use(Lazyload);

//宫格布局组件
import { Grid, GridItem } from 'vant';
Vue.use(Grid);
Vue.use(GridItem);

//通知栏
import { NoticeBar } from 'vant';
Vue.use(NoticeBar);

//单元组件
import { Cell, CellGroup } from 'vant';
Vue.use(Cell);
Vue.use(CellGroup);

//吸顶组件
import { Sticky } from 'vant';
Vue.use(Sticky);

// 下拉菜单组件
import { DropdownMenu, DropdownItem } from 'vant';
Vue.use(DropdownMenu);
Vue.use(DropdownItem);

//复选框组件
import { Checkbox, CheckboxGroup } from 'vant';
Vue.use(Checkbox);
Vue.use(CheckboxGroup);

//商品导航组件
import { GoodsAction, GoodsActionIcon, GoodsActionButton } from 'vant';
Vue.use(GoodsAction);
Vue.use(GoodsActionButton);
Vue.use(GoodsActionIcon);

//导航栏组件
import { NavBar } from 'vant';
Vue.use(NavBar);

//提交订单组件
import { SubmitBar } from 'vant';
Vue.use(SubmitBar);

//用户评分组件
import { Rate } from 'vant';
Vue.use(Rate);

//消息通知组件
import { Notify } from 'vant';
Vue.use(Notify);

//进步器组件
import { Stepper } from 'vant';
Vue.use(Stepper);

//提示组件
import { Dialog } from 'vant';
Vue.use(Dialog);
/*---------------------------------Vant组件库--------------------------------- */

Vue.use(Vuex)

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
