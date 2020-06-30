// import Vue from 'vue';
import Vuex from 'vuex';
export default new Vuex.Store({
    state: {//使用state数据传输，传输购物车中的商品清单
        ShopCartInfo: JSON.parse(localStorage.getItem('ShopCartInfo') || '[]'),//获取数据
        Total_price: 0,//总价
        all_checked: false,//一级全选按钮
        shop_num: 0//购买的数量，用于记录，改变购物车左上角的计数图标
    },
    getters: {//利用getters对数据过滤，使其返回的值为购物车中商品的总消费
        //购物车列表
        carList(state) {
            // 初始化全选状态
            if (state.all_checked) {
                state.ShopCartInfo.forEach((item) => {
                    item.checked = true
                })
            }
            // 列表变化存本地
            localStorage.setItem("ShopCartInfo", JSON.stringify(state.ShopCartInfo));
            return state.ShopCartInfo
        },
        //选中商品的金额
        Total_price(state) {
            let all_money = 0;
            state.ShopCartInfo.forEach((item) => {
                if (item.checked) {
                    all_money += item.buy_num * item.new_pri
                }
            })
            return state.Total_price = all_money
        },
    },
    mutations: {//点击商品列表中的商品，数据添加到购物车中，并显示在购物车中
        add_shop(state, data) {//添加商品
            let datas = { //传入的商品属性
                cart_id: data.cart_id,//商品id
                name: data.name,//商品名称
                img: data.img,//商品主视图
                buy_num: data.buy_num,//购买数量
                new_pri: data.new_pri,//单价
                checked: true//复选框的布尔值
            }
            let index = -1
            index = state.ShopCartInfo.findIndex(item => {//返回元素的索引位置，如果没有符合条件的元素返回 -1
                return item.cart_id == data.cart_id
            })
            if (index == -1) {//返回-1说明购物车里没有这个商品，则push进去，如果返回下标，则说明购物车已存在物品
                state.car.push(datas)
            } else {
                this.$dialog.alert({
                    message: "商品已加入到购物车，请到购物车中确认！"
                });
            }
            this.showNotify();//显示添加成功
        },
        //购买数量增加
        add_num(state, cart_id) {
            let index = state.ShopCartInfo.findIndex(item => {
                return item.cart_id == cart_id
            })
            return state.ShopCartInfo[index].buy_num++
        },
        //购买数量减少
        reduce_num(state, cart_id) {
            let index = state.ShopCartInfo.findIndex(item => {
                return item.cart_id == cart_id
            })
            if (state.ShopCartInfo[index].num <= 1) {
                return state.ShopCartInfo[index].buy_num = 1
            } else {
                return state.ShopCartInfo[index].buy_num--
            }
        },
        //购物车单选
        select(state, cart_id) {
            let index = state.ShopCartInfo.findIndex(item => {
                return item.cart_id == cart_id
            })
            state.ShopCartInfo[index].checked = !state.ShopCartInfo[index].checked
            let flag = state.ShopCartInfo.some((item) => {
                return item.checked == false
            })
            if (!flag) {//如果全部选中，则全选状态也改变
                state.all_checked = true
            } else {
                state.all_checked = false
            }
        },
        // 购物车全选
        select_all(state) {
            state.all_checked = !state.all_checked
            if (state.all_checked) {
                state.ShopCartInfo.forEach((item) => {
                    item.checked = true
                })
            } else {
                state.ShopCartInfo.forEach((item) => {
                    item.checked = false
                })
            }
        },
        //删除商品
        delete(state) {
            console.log(state)
        }
    },
    //异步触发mutations里面的方法 在外部组件里进行全局执行actions里面方法的时候，你只需要用执行this.$store
    actions: {
        add_shop({ commit }, data) {//增加商品
            commit('add_shop', data)
        },
        add_num({ commit }, cart_id) {//增加数量
            commit('add_num', cart_id)
        },
        reduce_num({ commit }, cart_id) {//减少数量
            commit('reduce_num', cart_id)
        },
        select({ commit }, cart_id) {//单个商品的复选框
            commit('select', cart_id)
        },
        select_all({ commit }) {//全选
            commit('select_all')
        },
        delete({ commit }) {//删除
            commit('delete')
        },
    }
})

// export default store;