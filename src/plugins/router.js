import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home";
import Player from "@/views/Player";

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    { path: "/", name: "home", component: Home },
    { path: "/player", name: "player", component: Player },
  ],
});
