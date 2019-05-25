import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    select: {
      coleccion: "",
      id: ""
    }
  },
  mutations: {
    cambiarEstado(state, payload) {
      state.select = payload;
    }
  }
});
