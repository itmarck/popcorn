<template>
  <div>
    <app-loader v-if="!this.cartelera.length"></app-loader>
    <cartelera-todo :films="cartelera" :show="true" v-else></cartelera-todo>
  </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/firestore";
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
  methods: {
    llenarCartelera() {
      firebase
        .firestore()
        .collection(this.coleccion)
        .orderBy("titulo")
        .onSnapshot(snap => {
          this.cartelera = [];
          snap.forEach(doc => {
            this.cartelera.push({
              id: doc.id,
              coleccion: this.coleccion,
              titulo: doc.data().titulo,
              anio: doc.data().anio,
              ruta: doc.data().ruta
            });
          });
        });
    }
  },
  created() {
    this.llenarCartelera();
  }
};
</script>
