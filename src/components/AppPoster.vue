<template>
  <div>
    <div class="poster" @click="mostrarDetalle">
      <img class="imagen" :src="poster.ruta" :alt="poster.titulo" />
    </div>
    <h3 class="titulo">{{ poster.titulo }}</h3>
    <h4 class="anio">{{ poster.anio }}</h4>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  props: {
    poster: Object
  },
  methods: {
    mostrarDetalle() {
      this.cambiarEstado({
        id: this.poster.id,
        coleccion: this.poster.coleccion
      });
      this.$router.push({ path: "/detalle" });
    },
    ...mapMutations(["cambiarEstado"])
  }
};
</script>

<style scoped>
.poster {
  cursor: pointer;
  position: relative;
}

.poster:hover::after {
  position: absolute;
  content: "";
  background: rgba(0, 0, 0, 0.6);
  border-radius: 0.5em;
  width: 100%;
  height: 100%;
  left: 0;
  bottom: 0;
}

.imagen {
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 0.5em;
}

.titulo,
.anio {
  margin: 0;
  font-size: 1rem;
  cursor: default;
}

.titulo {
  margin: 0.5em 0;
}

.anio {
  color: var(--textoClaro);
  font-weight: normal;
  font-size: 0.8em;
}
</style>
