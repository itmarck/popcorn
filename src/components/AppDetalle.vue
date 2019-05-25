<template>
  <div>
    <section>
      <img :src="film.ruta" :alt="film.titulo" />
    </section>
    <body>
      <button @click="cerrar">Cerrar</button>
      <h1>{{ film.titulo }}</h1>
      <h2>{{ film.anio }}</h2>
      <p>{{ select.coleccion.toUpperCase() }}</p>
      <p>{{ film.sinopsis }}</p>
      <p v-if="this.film.temporadas > 0">temp: {{ film.temporadas }}</p>
      <p v-if="this.film.capitulos > 0">caps: {{ film.capitulos }}</p>
      <ul>
        <li v-for="(genero, i) of film.generos" :key="i">
          {{ genero }}
        </li>
      </ul>
      <button>Ver trailer</button>
    </body>
  </div>
</template>

<script>
import { mapState } from "vuex";
import firebase from "firebase/app";
import "firebase/firestore";
export default {
  name: "AppDetalle",
  created() {
    if (this.select.id == "") {
      this.$router.push({ path: "/" });
    } else {
      firebase
        .firestore()
        .collection(this.select.coleccion)
        .doc(this.select.id)
        .get()
        .then(doc => {
          this.film = doc.data();
        });
    }
  },
  data() {
    return {
      film: {}
    };
  },
  methods: {
    cerrar() {
      this.$router.push({ path: `/${this.select.coleccion}` });
    }
  },
  computed: {
    ...mapState(["select"])
  }
};
</script>
