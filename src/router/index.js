import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ProduseView from "../views/ProduseView.vue";
import DetaliuProdusView from "../views/DetaliuProdusView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/produse",
    name: "produse",
    component: ProduseView,
  },
  {
    path: "/produse/:id",
    name: "detaliu-produs",
    component: DetaliuProdusView,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
