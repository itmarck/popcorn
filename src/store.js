import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    film: {
      coleccion: "",
      id: ""
    }
  },
  mutations: {
    setFilm(state, payload) {
      // Vue.set(state.film, "id", payload.id);
      // Vue.set(state.film, "coleccion", payload.coleccion);
      state.film = payload;
    }
  }
});
