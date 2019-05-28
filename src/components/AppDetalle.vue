<template>
  <div class="principal" :style="{ backgroundImage: `url(${film.ruta})` }">
    <div class="sombra">
      <div class="poster"><img :src="film.ruta" /></div>
      <div class="contenido">
        <div class="contenido__header">
          <div class="cabecera">
            <h1 class="titulo">{{ film.titulo }}</h1>
            <button class="button__cerrar" @click="cerrar"><h1>X</h1></button>
          </div>
          <div class="descripcion">
            <ul class="generos">
              <li v-for="(genero, i) of film.generos" :key="i">{{ genero }}</li>
              <li>{{ film.anio }}</li>
              <li>{{ select.coleccion.toUpperCase() }}</li>
            </ul>
            <p class="sinopsis">{{ film.sinopsis }}</p>
            <ul>
              <li v-if="this.film.temporadas > 0">
                temp: {{ film.temporadas }}
              </li>
              <li v-if="this.film.capitulos > 0">caps: {{ film.capitulos }}</li>
            </ul>
          </div>
        </div>
        <div class="contenido__footer">
          <button
            class="button__trailer"
            @click="pop_up = !pop_up"
            v-if="!pop_up"
          >
            <h1>Ver trailer</h1>
          </button>
          <button class="icofont-heart"></button>
          <div class="switch"></div>
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
      this.$router.push({ path: `/${this.select.detelle}` });
    }
  }
};
</script>

<style scoped>
.principal {
  background-size: 100%;
}
.sombra {
  flex: auto;
  background: var(--Negro);
  opacity: 0.9;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.poster {
  width: 100%;
  position: relative;
}
.poster:after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 50%;
  background: linear-gradient(
    to bottom,
    transparent 0%,
    var(--colorPrimario) 80%
  );
}
.poster img {
  display: block;
  width: 100%;
}
.contenido {
  flex: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.contenido__header {
  display: flex;
  flex-direction: column;
}

.cabecera {
  display: flex;
  justify-content: space-between;
}

.descripcion {
  display: flex;
  flex-direction: column;
}

@media (min-width: 580px) {
  .poster img {
    display: block;
  }
}
</style>
