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
    {
      path: "/work",
      name: "work",
      component: () => import("../pages/Work.vue"),
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      if (
        to.matched.length > 1 &&
        from.matched.length > 1 &&
        to.matched[0].path === from.matched[0].path
      ) {
        return {};
      }
      return { top: 0 };
    }
  },
});

export default router;
