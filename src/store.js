import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    favoritos: [],
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
    quitarFav(state, film) {
      state.favoritos.splice(state.favoritos.indexOf(film), 1);
    }
  }
});
