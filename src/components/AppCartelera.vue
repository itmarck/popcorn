<template>
  <div>
    <app-poster
      v-for="(film, index) in cartelera"
      :key="index"
      :titulo="film.titulo"
      :anio="film.anio"
      :ruta="film.ruta"
    ></app-poster>
  </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/firestore";
import AppPoster from "@/components/AppPoster.vue";
export default {
  name: "AppCartelera",
  components: {
    AppPoster
  },
  props: ["nombre"],
  data() {
    return {
      cartelera: []
    };
  },
  created() {
    firebase
      .firestore()
      .collection(this.nombre)
      .orderBy("titulo")
      .onSnapshot(snap => {
        this.cartelera = [];
        snap.forEach(doc => {
          this.cartelera.push(doc.data());
        });
      });
  }
};
</script>

<style scoped>
div {
  margin: 1rem;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(1, 1fr);
}

@media (min-width: 320px) and (max-width: 480px) {
  div {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 480px) and (max-width: 640px) {
  div {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (min-width: 640px) and (max-width: 800px) {
  div {
    grid-template-columns: repeat(4, 1fr);
  }
}

@media (min-width: 800px) and (max-width: 1080px) {
  div {
    grid-template-columns: repeat(5, 1fr);
  }
}

@media (min-width: 1080px) and (max-width: 1270px) {
  div {
    grid-template-columns: repeat(6, 1fr);
  }
}

@media (min-width: 1270px) {
  div {
    grid-template-columns: repeat(7, 1fr);
  }
}
</style>
