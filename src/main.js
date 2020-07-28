import Vue from "vue";
import App from "./App.vue";

import "./registerServiceWorker";
import router from "./router"; // 路由
import store from "./store"; // 状态机

import "./bus"; // 通信总线

import "./theme"; // UI主题

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
