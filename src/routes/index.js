import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../pages/Home.vue"),
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../pages/About.vue"),
    },
    {
      path: "/pricing",
      name: "pricing",
      component: () => import("../pages/Pricing.vue"),
    },
    {
      path: "/blog",
      name: "blog",
      component: () => import("../pages/Blog.vue"),
    },
    {
      path: "/contact",
      name: "contact",
      component: () => import("../pages/Contact.vue"),
    },
  ],
});

export default router;
