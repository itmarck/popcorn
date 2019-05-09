import Vue from "vue";
import Router from "vue-router";
import Peliculas from "./views/Peliculas.vue";

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
      name: "series"
    },
    {
      path: "/anime",
      name: "anime"
    },
    {
      path: "/indie",
      name: "indie"
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
    }
  ]
});
