<template>
  <div class="app">
    <header class="header">
      <h1 class="title">Popcorn Web</h1>
      <section class="links">
        <div class="films">
          <router-link class="film" to="/peliculas">Peliculas</router-link>
          <router-link class="film" to="/series">Series</router-link>
          <router-link class="film" to="/anime">Anime</router-link>
          <router-link class="film" to="/indie">Indie</router-link>
        </div>
        <div class="options">
          <router-link
            to="/buscar"
            class="option icofont-ui-search"
          ></router-link>
          <router-link
            to="/favoritos"
            class="option icofont-heart"
          ></router-link>
          <router-link
            to="/info"
            class="option icofont-info-circle"
          ></router-link>
          <router-link
            to="/configuracion"
            class="option icofont-gear"
          ></router-link>
        </div>
      </section>
    </header>
    <router-view class="view" />
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  methods: {
    ...mapMutations(["aplicarTema"])
  },
  created() {
    this.aplicarTema();
  }
};
</script>

<style scoped>
.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.view {
  flex: auto;
  display: flex;
}

.header {
  width: 100%;
  background-color: var(--colorOscuro);
  box-shadow: 0 0 1rem var(--Negro);
}

.title {
  margin: 0;
  font-size: 1.2rem;
  text-align: center;
  padding: 1em;
}
.links {
  display: flex;
  justify-content: space-between;
}

.films,
.options {
  display: flex;
}

.options {
  padding: 0 0.5em;
}

.option {
  color: var(--textoClaro);
  padding: 0.5em;
}

.option:hover {
  color: var(--colorEnfasis);
  transition: all 0.5s;
}

a {
  color: var(--textoClaro);
  text-decoration: none;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1em;
  cursor: pointer;
}

.film {
  width: 100%;
  display: flex;
}

.film:hover {
  color: var(--Blanco);
  transition: all 0.5s;
}

.film.router-link-exact-active {
  color: var(--Blanco);
}
.film.router-link-exact-active::after {
  content: "";
  background-color: var(--colorEnfasis);
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 3px;
}

@media (max-width: 560px) {
  .links {
    flex-direction: column-reverse;
  }
  .options {
    justify-content: flex-end;
  }
  a {
    padding-right: 0;
    padding-left: 0;
  }
}
</style>
