import Vue from "vue";
import VueRouter from "vue-router";
import Main from "@/components/Main";
import Cha from "../components/Cha";
import Hunt from "../components/Hunt";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Main",
    component: Main,
  },
  {
    path: "/Cha",
    name: "Cha",
    component: Cha,
  },
  {
    path: "/hunt",
    name: "Hunt",
    component: Hunt,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
