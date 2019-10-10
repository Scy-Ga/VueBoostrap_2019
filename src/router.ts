import Vue from "vue";
import Router from "vue-router";
import CsudijoView from "./views/CsudijoView.vue";
import HomeView from "./views/HomeView.vue";
import VuexDemoView from "./views/VuexDemoView.vue";
import EnyemView from "./views/EnyemView.vue";
import { ENGINE_METHOD_PKEY_METHS } from "constants";

Vue.use(Router);

export default new Router({
  base: process.env.BASE_URL,
  mode: "history",
  routes: [
    {
      component: HomeView,
      name: "home",
      path: "/"
    },
    {
      component: VuexDemoView,
      name: "vuexDemo",
      path: "/vuexdemo"
    },
    {
      component: CsudijoView,
      name: "csudijo",
      path: "/csudijo"
    },
    {
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("./views/AboutView.vue"),
      name: "about",
      path: "/about"
    },
    {
      component: () => import("./views/EnyemView.vue"),
      name: "enyem",
      path: "/Enyem"
    }
  ]
});
