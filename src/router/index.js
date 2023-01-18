import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login.vue";
import MainPage from "../views/MainPage.vue";
import Bootstrap from "../views/Bootstrap.vue";
import bootstrapChild from "./bootstrap.js";
import Lazyload from "../views/LazyLoad.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "主页面",
    meta: {
      isAuth: true,
    },
    component: MainPage,
  },
  {
    path: "/login",
    name: "登录页",
    component: Login,
  },
  {
    path: "/lazyload",
    name: "图片懒加载",
    component: Lazyload,
  },
  {
    path: "/bootstrap",
    name: "Bootstrap",
    component: Bootstrap,
    params: { id: 0 },
    children: [...bootstrapChild],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
