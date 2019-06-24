<template>
  <div>
    <app-loader v-if="!this.cartelera.length"></app-loader>
    <cartelera-todo :films="cartelera" :show="true" v-else></cartelera-todo>
  </div>
</template>

<script>
import { getCarteleraFrom } from "../db/Cartelera";
import CarteleraTodo from "@/components/CarteleraTodo.vue";
import AppLoader from "@/components/AppLoader.vue";
export default {
  components: {
    CarteleraTodo,
    AppLoader
  },
  props: {
    coleccion: String
  },
  data() {
    return {
      cartelera: []
    };
  },
  created() {
    getCarteleraFrom(this.coleccion).then(data => (this.cartelera = data));
  }
};
</script>
