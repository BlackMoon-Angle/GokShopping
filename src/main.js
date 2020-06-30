import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vantUI from "./store/vant"
import 'lib-flexible/flexible'
Vue.use(vantUI);
/*---------------------------------Vant组件库--------------------------------- */

//轮播图懒加载组件
import { Lazyload } from 'vant';
Vue.use(Lazyload, {
  lazyComponent: true,
});
/*---------------------------------Vant组件库--------------------------------- */

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
