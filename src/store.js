import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    film: {
      estaSeleccionado: false,
      coleccion: "",
      id: null
    }
  },
  mutations: {},
  actions: {}
});
