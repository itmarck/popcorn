import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    favoritos: JSON.parse(localStorage.getItem("favoritos")) || [],
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
    }
  }
});
