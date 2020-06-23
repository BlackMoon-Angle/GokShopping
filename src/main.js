import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
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
/*---------------------------------Vant组件库--------------------------------- */

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
