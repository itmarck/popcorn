<template>
  <div>
    <pop-poster
      v-for="(pelicula, index) in peliculas"
      :key="index"
      :titulo="pelicula.titulo"
      :anio="pelicula.anio"
      :ruta="pelicula.ruta"
    ></pop-poster>
  </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/firestore";
import PopPoster from "@/components/PopPoster.vue";
export default {
  name: "Peliculas",
  components: {
    PopPoster
  },
  data() {
    return {
      peliculas: []
    };
  },
  created() {
    firebase
      .firestore()
      .collection("/peliculas")
      .orderBy("titulo")
      .onSnapshot(snap => {
        this.peliculas = [];
        snap.forEach(doc => {
          this.peliculas.push(doc.data());
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
