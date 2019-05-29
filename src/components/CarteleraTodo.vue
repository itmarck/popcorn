<template>
  <div v-if="films.length">
    <h2 v-if="!show">{{ films[0].coleccion.toUpperCase() }}</h2>
    <section class="posters">
      <app-poster
        v-for="film in films"
        :key="film.id"
        :poster="{ ...film }"
      ></app-poster>
    </section>
  </div>
</template>

<script>
import AppPoster from "@/components/AppPoster.vue";
export default {
  name: "CarteleraTodo",
  components: {
    AppPoster
  },
  props: ["films", "show"]
};
</script>

<style scoped>
h2 {
  font-size: 1rem;
  margin: 1em;
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
