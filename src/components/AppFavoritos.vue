<template>
  <div class="principal" v-if="favoritos.length">
    <cartelera-todo :films="peliculas"></cartelera-todo>
    <cartelera-todo :films="series"></cartelera-todo>
    <cartelera-todo :films="animes"></cartelera-todo>
    <cartelera-todo :films="indie"></cartelera-todo>
  </div>
  <p v-else class="advertencia">No tienes ningun favorito</p>
</template>

<script>
import CarteleraTodo from "@/components/CarteleraTodo.vue";
import { mapState } from "vuex";

export default {
  components: {
    CarteleraTodo
  },
  data() {
    return {
      peliculas: [],
      series: [],
      animes: [],
      indie: []
    };
  },
  computed: {
    ...mapState(["favoritos"])
  },
  created() {
    this.favoritos.forEach(element => {
      if (element.coleccion == "peliculas") {
        this.peliculas.push(element);
      } else if (element.coleccion == "series") {
        this.series.push(element);
      } else if (element.coleccion == "anime") {
        this.animes.push(element);
      } else if (element.coleccion == "indie") {
        this.indie.push(element);
      }
    });
  }
};
</script>

<style scoped>
.principal {
  display: block;
}
.advertencia {
  justify-content: center;
  align-items: center;
}
</style>
