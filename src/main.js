import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueLazyload from "vue-lazyload";

Vue.config.productionTip = false;
const loadimage = require("./assets/loading.png");
const errorimage = require("./assets/error.png");

Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: errorimage,
  loading: loadimage,
  attempt: 1,
});

window.vm = new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
