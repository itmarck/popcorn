<template>
  <article>
    <section @click="mostrarDetalle">
      <img :src="poster.ruta" alt="Cover" width="400px" height="600px" />
    </section>
    <h3>{{ poster.titulo }}</h3>
    <h4>{{ poster.anio }}</h4>
  </article>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  props: {
    poster: Object
  },
  methods: {
    ...mapMutations(["setFilm"]),
    mostrarDetalle() {
      this.setFilm({
        id: this.poster.id,
        coleccion: this.poster.coleccion
      });
      this.$router.push({ path: "/detalle" });
    }
  }
};
</script>

<style scoped>
section {
  cursor: pointer;
  position: relative;
}

img {
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 0.5em;
}

section:hover::after {
  position: absolute;
  content: "";
  background: rgba(0, 0, 0, 0.6);
  border-radius: 0.5em;
  width: 100%;
  height: 100%;
  left: 0;
  bottom: 0;
}

h3,
h4 {
  margin: 0;
  font-size: 1rem;
  cursor: default;
}

h3 {
  margin: 0.5em 0;
}

h4 {
  color: var(--textoClaro);
  font-weight: normal;
  font-size: 0.8em;
}
</style>
