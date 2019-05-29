<template>
  <div class="main">
    <input
      class="input"
      type="text"
      v-model="titulo"
      placeholder="Escribe un titulo"
      @keyup="filtrar"
    />
    <app-loader v-if="!listaFiltrada.length"></app-loader>
    <cartelera-todo :films="listaFiltrada" :show="true" v-else></cartelera-todo>
  </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/firestore";
import CarteleraTodo from "@/components/CarteleraTodo.vue";
import AppLoader from "@/components/AppLoader.vue";
export default {
  name: "AppBuscar",
  components: {
    CarteleraTodo,
    AppLoader
  },
  data() {
    return {
      titulo: "",
      cartelera: [],
      listaFiltrada: []
    };
  },
  methods: {
    filtrar() {
      if (this.titulo.trim().length > 0) {
        this.listaFiltrada = this.cartelera.filter(film =>
          this.incluye(
            this.limpiarCadena(film.titulo),
            this.limpiarCadena(this.titulo)
          )
        );
      } else this.listaFiltrada = [];
    },
    limpiarCadena(cadena) {
      let chars = {
        á: "a",
        é: "e",
        í: "i",
        ó: "o",
        ú: "u",
        Á: "A",
        É: "E",
        Í: "I",
        Ó: "O",
        Ú: "U"
      };
      let expr = /[áàéèíìóòúùñ]/gi;
      let res = cadena.replace(expr, e => chars[e]);
      return res.toLowerCase().trim();
    },
    incluye(cadena, letras) {
      for (let i = 0; i < letras.length; i++) {
        const char = letras[i];
        if (!cadena.includes(char)) {
          return false;
        }
      }
      return true;
    },
    llenarCarteleraDe(coleccion) {
      firebase
        .firestore()
        .collection(coleccion)
        .get()
        .then(snap => {
          snap.forEach(doc => {
            this.cartelera.push({
              id: doc.id,
              coleccion,
              titulo: doc.data().titulo,
              anio: doc.data().anio,
              ruta: doc.data().ruta
            });
          });
        });
    }
  },
  created() {
    this.llenarCarteleraDe("peliculas");
    this.llenarCarteleraDe("series");
    this.llenarCarteleraDe("anime");
    this.llenarCarteleraDe("indie");
  }
};
</script>

<style scoped>
.main {
  flex-direction: column;
}
.input {
  background: var(--colorOscuro);
  padding: 1em;
  border: none;
  border-radius: 1em;
  color: var(--Blanco);
  margin: 1.5rem 1rem;
  margin-bottom: 0;
}
</style>
