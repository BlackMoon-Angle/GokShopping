import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Classification from "../views/Classification.vue"
import ShoppingCart from "../views/ShoppingCart.vue"
import Detail from "../components/Detail.vue"
import User from "../views/User.vue"
import Login from "../views/Login.vue"
import Register from "../views/Register.vue"
import ModifyPassword from "../views/ModifyPassword"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    redirect: '/Home'
  },
  {
    path: "/Home",
    name: "Home",
    component: Home
  },
  {
    path: "/Classification",
    name: "Classification",
    component: Classification,
  },
  {
    path: "/Detail/:id",
    name: "Detail",
    component: Detail
  },
  {
    path: "/ShoppingCart",
    name: "ShoppingCart",
    component: ShoppingCart
  },
  {
    path: "/User",
    name: "User",
    component: User
  },
  {
    path: "/Login",
    name: "Login",
    component: Login
  },
  {
    path: "/Register",
    name: "Register",
    component: Register
  },
  {
    path: "/ModifyPassword",
    name: "ModifyPassword",
    component: ModifyPassword
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
