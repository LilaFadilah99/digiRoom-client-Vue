import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import DetailPage from "../views/DetailPage.vue";
import AccountPage from "../views/AccountPage.vue";
import FavoritePage from "../views/FavoritePage.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage,
  },
  {
    path: "/detail/:id",
    name: "detail",
    component: DetailPage,
  },
  {
    path: "/account",
    name: "account",
    component: AccountPage,
  },
  {
    path: "/favorite",
    name: "favorite",
    component: FavoritePage,
  },
];
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
