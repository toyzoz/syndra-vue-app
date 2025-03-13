import { createWebHashHistory, createRouter } from "vue-router";

const routes = [
  { path: "/", component: () => import("@/views/catalog/index.vue") },
  { path: "/order", component: () => import("@/views/order/index.vue") },
  { path: "/basket", component: () => import("@/views/basket/index.vue") },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
