import Vue from "vue";
import Vuex from "vuex";
import temas from "@/themes";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    favoritos: JSON.parse(localStorage.getItem("favoritos")) || [],
    tema: localStorage.getItem("tema") || "dark",
    select: {
      coleccion: "",
      id: ""
    }
  },
  mutations: {
    cambiarEstado(state, payload) {
      state.select = payload;
    },
    agregarFav(state, film) {
      state.favoritos.push(film);
    },
    quitarFav(state, id) {
      state.favoritos.splice(state.favoritos.map(e => e.id).indexOf(id), 1);
    },
    aplicarTema(state) {
      let root = document.documentElement;
      temas[state.tema].forEach(estilo => {
        root.style.setProperty("--" + estilo.propiedad, estilo.valor);
      });
    },
    establecerTema(state, tema) {
      state.tema = tema;
      localStorage.setItem("tema", tema);
    }
  }
});
