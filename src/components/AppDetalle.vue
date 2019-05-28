<template>
  <div class="principal" :style="{ backgroundImage: `url(${film.ruta})` }">
    <div class="sombra">
      <div class="poster"><img :src="film.ruta"></div>
      <div class="contenido">
        <div class="contenido__header">
          <div class="titulo">
            <h1 class="titulo">{{ film.titulo }}</h1>
            <button class="button__Cerrar" @click="cerrar"><h1>X</h1></button>
          </div>
          <div class="descripcion">
            <ul>
                <li v-for="(genero, i) of film.generos" :key="i">{{ genero }}</li>
                <li>{{film.anio}}</li>
                <li>{{ select.coleccion.toUpperCase() }}</li>
            </ul>
            <p class="sinopsis">{{ film.sinopsis }}</p>
            <ul>
              <li v-if="this.film.temporadas > 0">temp: {{ film.temporadas }}</li>
              <li v-if="this.film.capitulos > 0">caps: {{ film.capitulos }}</li>
            </ul>
          </div>
        </div>
        <div class="contenido__footer">
          <button class="icofont-heart"></button>
          <div class="switch"></div>
          <button class="button__Trailer" id="button__Trailer" @click="pop_up=!pop_up" v-if="!pop_up"><h1>Ver trailer</h1></button>
        </div>
      </div>
    </div>
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
      film: {},
      pop_up: false
    };
  },
  computed: {
    ...mapState(["select"])
  },
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
  methods: {
    cerrar() {
      this.$router.push({ path: `/${this.select.detell}` });
    },

  }
};
</script>
<style>
.principal{
  background-size: 100%;
}
.sombra{
  flex: auto;
  background: var(--Negro);
  opacity: 0.9;
  max-height: inherit;  
  display: flex;
  padding-top: 4%;
  padding-bottom: 3%;
  padding-left: 10%;padding-right: 3%;
}
.poster{
  width: 30%;
  height: 100%;
}
.poster img{
  display: block;
  width: auto;
  height: 100%;
}
</style>

