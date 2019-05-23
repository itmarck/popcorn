<template>
  <div>
    <section>
      <app-poster
        v-for="film in cartelera"
        :key="film.id"
        :poster="{ ...film, coleccion }"
      ></app-poster>
    </section>
  </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/firestore";
import AppPoster from "@/components/AppPoster.vue";
export default {
  components: { AppPoster },
  props: ["coleccion"],
  data() {
    return {
      cartelera: []
    };
  },
  created() {
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
};
</script>

<style scoped>
section {
  margin: 1rem;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(1, 1fr);
}

@media (min-width: 320px) and (max-width: 480px) {
  section {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 480px) and (max-width: 640px) {
  section {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (min-width: 640px) and (max-width: 800px) {
  section {
    grid-template-columns: repeat(4, 1fr);
  }
}

@media (min-width: 800px) and (max-width: 1080px) {
  section {
    grid-template-columns: repeat(5, 1fr);
  }
}

@media (min-width: 1080px) and (max-width: 1270px) {
  section {
    grid-template-columns: repeat(6, 1fr);
  }
}

@media (min-width: 1270px) {
  section {
    grid-template-columns: repeat(7, 1fr);
  }
}
</style>
