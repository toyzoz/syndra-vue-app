import { createWebHashHistory, createRouter } from "vue-router";

const routes = [
  { path: "/", component: () => import("@/pages/catalog/index.vue") },
  { path: "/order", component: () => import("@/pages/order/index.vue") },
  { path: "/basket", component: () => import("@/pages/basket/index.vue") },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
