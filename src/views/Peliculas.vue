<template>
  <div>
    <pop-poster></pop-poster>
    <pop-poster></pop-poster>
    <pop-poster></pop-poster>
    <pop-poster></pop-poster>
    <pop-poster></pop-poster>
    <pop-poster></pop-poster>
    <pop-poster></pop-poster>
    <pop-poster></pop-poster>
    <pop-poster></pop-poster>
    <pop-poster></pop-poster>
    <pop-poster></pop-poster>
    <pop-poster></pop-poster>
    <pop-poster></pop-poster>
    <pop-poster></pop-poster>
    <pop-poster></pop-poster>
  </div>
</template>

<script>
import PopPoster from "@/components/PopPoster.vue";
export default {
  name: "Peliculas",
  components: {
    PopPoster
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

@media (max-width: 400px) {
  div {
    grid-template-columns: repeat(1, 1fr);
  }
}

@media (min-width: 400px) and (max-width: 600px) {
  div {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 600px) and (max-width: 800px) {
  div {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (min-width: 800px) and (max-width: 1000px) {
  div {
    grid-template-columns: repeat(4, 1fr);
  }
}

@media (min-width: 1000px) and (max-width: 1200px) {
  div {
    grid-template-columns: repeat(5, 1fr);
  }
}

@media (min-width: 1200px) {
  div {
    grid-template-columns: repeat(6, 1fr);
  }
}
</style>
