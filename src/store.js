import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    select: {
      coleccion: "",
      id: ""
    },
    favoritos: []
  },
  mutations: {
    cambiarEstado(state, payload) {
      state.select = payload;
    },
    agregarFav(state, film) {
      if (!state.favoritos.filter(e => e.id == film.id).length) {
        state.favoritos.push(film);
      }
    }
  }
});
