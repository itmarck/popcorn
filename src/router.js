import Vue from "vue";
import Router from "vue-router";
import Peliculas from "./views/Peliculas.vue";
import Series from "./views/Series.vue";
import Anime from "./views/Anime.vue";
import Indie from "./views/Indie.vue";
import Admin from "./components/AppAdmin.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "*",
      redirect: "/peliculas"
    },
    {
      path: "/peliculas",
      name: "peliculas",
      component: Peliculas
    },
    {
      path: "/series",
      name: "series",
      component: Series
    },
    {
      path: "/anime",
      name: "anime",
      component: Anime
    },
    {
      path: "/indie",
      name: "indie",
      component: Indie
    },
    {
      path: "/buscar",
      name: "buscar"
    },
    {
      path: "/favoritos",
      name: "favoritos"
    },
    {
      path: "/info",
      name: "info"
    },
    {
      path: "/configuracion",
      name: "configuracion"
    },
    {
      path: "/add",
      component: Admin
    }
  ]
});
