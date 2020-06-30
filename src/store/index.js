import Vue from "vue";
import Vuex from "vuex";
import VueX_ShopCart from './modules/ShopCart'
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    VueX_ShopCart
  }
});
