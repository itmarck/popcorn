<template>
  <div>
    <div class="loader" v-if="!this.cartelera.length">
      <div class="sk-cube-grid">
        <div class="sk-cube sk-cube1"></div>
        <div class="sk-cube sk-cube2"></div>
        <div class="sk-cube sk-cube3"></div>
        <div class="sk-cube sk-cube4"></div>
        <div class="sk-cube sk-cube5"></div>
        <div class="sk-cube sk-cube6"></div>
        <div class="sk-cube sk-cube7"></div>
        <div class="sk-cube sk-cube8"></div>
        <div class="sk-cube sk-cube9"></div>
      </div>
    </div>
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
export default {
  components: {
    AppPoster
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
.loader {
  flex: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

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

@media (min-width: 1270px) {
  .posters {
    grid-template-columns: repeat(7, 1fr);
  }
}
</style>
