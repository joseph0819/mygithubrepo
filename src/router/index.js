import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/components/HomePage.vue";
import MyRepos from "@/components/MyRepos.vue";
import ErrorPage from "@/components/ErrorPage.vue"

// NB: Replace `NotFound`, `MyRepos`, ‘Home’ with your file names//

const routes = [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "/myrepos",
    component: MyRepos,
  },

// This is the wildcard to catch all path errors

 {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: ErrorPage,
  },
];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;