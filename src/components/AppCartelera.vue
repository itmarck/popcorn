<template>
  <div>
    <app-loader v-if="!this.cartelera.length"></app-loader>
    <div class="posters" v-else>
      <app-poster
        v-for="film in cartelera"
        :key="film.id"
        :poster="{ ...film, coleccion }"
      ></app-poster>
    </div>
  </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/firestore";
import AppPoster from "@/components/AppPoster.vue";
import AppLoader from "@/components/AppLoader.vue";
export default {
  components: {
    AppPoster,
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

<style scoped>
.posters {
  margin: 1rem;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(1, 1fr);
}

@media (min-width: 320px) and (max-width: 480px) {
  .posters {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 480px) and (max-width: 640px) {
  .posters {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (min-width: 640px) and (max-width: 800px) {
  .posters {
    grid-template-columns: repeat(4, 1fr);
  }
}

@media (min-width: 800px) and (max-width: 1080px) {
  .posters {
    grid-template-columns: repeat(5, 1fr);
  }
}

@media (min-width: 1080px) and (max-width: 1270px) {
  .posters {
    grid-template-columns: repeat(6, 1fr);
  }
}

@media (min-width: 1270px) and (max-width: 2500px) {
  .posters {
    grid-template-columns: repeat(7, 1fr);
  }
}

@media (min-width: 2500px) {
  .posters {
    grid-template-columns: repeat(10, 1fr);
  }
}
</style>
