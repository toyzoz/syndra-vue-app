import { createWebHashHistory, createRouter } from "vue-router";

const routes = [
  { path: "/", component: () => import("@/views/catalog/index.vue") },
  {
    path: "/order",
    component: () => import("@/views/order/index.vue"),
    children: [
      {
        path: "/order/:id",
        component: () => import("@/views/order/OrderDetail.vue"),
      },
    ],
  },
  { path: "/basket", component: () => import("@/views/basket/index.vue") },
  { path: "/login", component: () => import("@/views/login/index.vue") },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
