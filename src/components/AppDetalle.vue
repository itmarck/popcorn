<template>
  <div>
    <section>
      <img :src="info.ruta" :alt="info.titulo" />
    </section>
    <body>
      <button @click="cerrar">Cerrar</button>
      <h1>{{ info.titulo }}</h1>
      <h2>{{ info.anio }}</h2>
      <p>{{ film.coleccion.toUpperCase() }}</p>
      <p>{{ info.sinopsis }}</p>
      <p v-if="this.info.temporadas > 0">temp: {{ info.temporadas }}</p>
      <p v-if="this.info.capitulos > 0">caps: {{ info.capitulos }}</p>
      <ul>
        <li v-for="(genero, i) of info.generos" :key="i">
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
  data() {
    return {
      info: {}
    };
  },
  created() {
    if (this.film.id == "") {
      this.$router.push({ path: "/" });
    } else {
      firebase
        .firestore()
        .collection(this.film.coleccion)
        .doc(this.film.id)
        .get()
        .then(doc => {
          this.info = doc.data();
        });
    }
  },
  methods: {
    cerrar() {
      this.$router.push({ path: `/${this.film.coleccion}` });
    }
  },
  computed: {
    ...mapState(["film"])
  }
};
</script>
