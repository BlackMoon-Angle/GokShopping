/*
    搜索框组件：Search；
    Layout布局组件：Col, Row；
    底部标签栏组件：Tabbar, TabbarItem；
    矢量图标组件：Icon；
    轮播图组件：Swipe, SwipeItem；
    宫格布局组件：Grid, GridItem；
    通知栏组件：NoticeBar；
    单元组件：Cell, CellGroup；
    吸顶组件：Sticky；
    下拉菜单组件：DropdownMenu, DropdownItem；
    复选框组件：Checkbox, CheckboxGroup；
    商品导航组件：GoodsAction, GoodsActionIcon, GoodsActionButton；
    导航栏组件：NavBar；
    提交订单组件：SubmitBar；
    用户评分组件：Rate；
    消息通知组件：Notify；
    进步器组件：Stepper；
    提示组件：Dialog；
    轻提示组件：Toast；
    表单组件：Form；
    输入框组件：Field；
    按钮组件：Button；

*/
import {
    Search, Col, Row, Tabbar, TabbarItem,
    Icon, Swipe, SwipeItem, Grid, GridItem,
    NoticeBar, Cell, CellGroup, Sticky,
    DropdownMenu, DropdownItem, Checkbox, CheckboxGroup,
    GoodsAction, GoodsActionIcon, GoodsActionButton, NavBar,
    SubmitBar, Rate, Notify, Stepper, Dialog, Toast, Form, Field,Button
} from 'vant';

let vantUI = [Search, Col, Row, Tabbar, TabbarItem,
    Icon, Swipe, SwipeItem, Grid, GridItem, NoticeBar,
    Cell, CellGroup, Sticky, DropdownMenu, DropdownItem,
    Checkbox, CheckboxGroup, GoodsAction, GoodsActionButton,
    GoodsActionIcon, NavBar, SubmitBar, Rate, Notify, Stepper,
    Dialog, Toast, Form, Field,Button]

export default {
    install(Vue) {
        vantUI.forEach(item => [
            Vue.use(item)
        ])
    }
}
