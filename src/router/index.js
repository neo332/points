import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/bus",
    name: "Bus",
    component: () => import("@/views/bus/Bus"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
