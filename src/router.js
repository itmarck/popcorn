import Vue from "vue";
import Router from "vue-router";
import Peliculas from "./views/Peliculas.vue";
import Series from "./views/Series.vue";
import Anime from "./views/Anime.vue";
import Indie from "./views/Indie.vue";
import Detalle from "./components/AppDetalle.vue";
import Buscar from "./components/AppBuscar.vue";
import Favoritos from "./components/AppFavoritos.vue";
import Info from "./components/AppInfo.vue";
import Configuracion from "./components/AppConfiguracion.vue";
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
      path: "/detalle",
      name: "detalle",
      component: Detalle
    },
    {
      path: "/buscar",
      name: "buscar",
      component: Buscar
    },
    {
      path: "/favoritos",
      name: "favoritos",
      component: Favoritos
    },
    {
      path: "/info",
      name: "info",
      component: Info
    },
    {
      path: "/configuracion",
      name: "configuracion",
      component: Configuracion
    },
    {
      path: "/admin",
      name: "admin",
      component: Admin
    }
  ]
});
