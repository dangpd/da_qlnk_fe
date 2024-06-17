import { createRouter, createWebHistory } from "vue-router";
import ForBidden from "@/views/ForBidden.vue";
const routes = [
  // Error 403 404
  { name: "forbidden", path: "/forbidden", component: ForBidden },

];
const router = createRouter({
  history: createWebHistory(),
  routes: routes,
  scrollBehavior(to, from, savedPosition) {
    return {
      el: "#main",
      top: 140,
    };
  },
});

export default router;
