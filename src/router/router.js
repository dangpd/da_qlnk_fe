import { createRouter, createWebHistory } from "vue-router";
import ForBidden from "@/views/ForBidden.vue";
import NotFound from "@/views/NotFound.vue";

// Admin
import AdminHome from "@/views/admin/AdminHome.vue";
import AdminUser from "@/views/admin/AdminUser.vue";
const routes = [
  {
    path: "/admin",
    component: AdminHome,
    children: [{ path: "/admin/user", component: AdminUser }],
  },
  // Error 403 404
  { name: "forbidden", path: "/forbidden", component: ForBidden },
  {
    path: "/:catchAll(.*)",
    component: NotFound,
  },
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
