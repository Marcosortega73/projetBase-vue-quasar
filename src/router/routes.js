const routes = [
  {
    path: "/login",
    name: "login",
    component: () => import("pages/auth/LoginComponent.vue"),
    /* children: [
      { path: '', component: () => import('pages/IndexPage.vue') }
    ] */
  },
  {
    path: "/",
    name: "home",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "/",
        name: "dashboard",
        component: () => import("pages/dashboard/DashboardPage.vue"),
      },
      {
        path: "/rutinas",
        name: "rutinas",
        component: () => import("pages/dashboard/routines/RoutinesDetails.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
