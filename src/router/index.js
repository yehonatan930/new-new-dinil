import Vue from "vue";
import VueRouter from "vue-router";
import welcom from "../views/welcom.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: welcom,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
