<template>
  <div id="app">
    <header id="nav">
      <h1>Popcorn Web</h1>
      <section>
        <div class="categoria">
          <router-link to="/peliculas">Peliculas</router-link>
          <router-link to="/series">Series</router-link>
          <router-link to="/anime">Anime</router-link>
          <router-link to="/indie">Indie</router-link>
        </div>
        <div class="opciones">
          <router-link
            tag="button"
            to="/buscar"
            class="icofont-ui-search"
          ></router-link>
          <router-link
            tag="button"
            to="/favoritos"
            class="icofont-heart"
          ></router-link>
          <router-link
            tag="button"
            to="/info"
            class="icofont-info-circle"
          ></router-link>
          <router-link
            tag="button"
            to="/configuracion"
            class="icofont-gear"
          ></router-link>
        </div>
      </section>
    </header>
    <router-view class="view" />
  </div>
</template>

<style scoped>
#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.view {
  flex: auto;
  display: flex;
}

header {
  width: 100%;
  background-color: var(--colorOscuro);
  box-shadow: 0 0 1rem var(--Negro);
}

h1 {
  margin: 0;
  color: white;
  font-size: 1.2rem;
  text-align: center;
  padding: 1em;
}
section {
  height: 3rem;
  display: flex;
  justify-content: space-between;
}

.categoria,
.opciones {
  display: flex;
}

button {
  background-color: transparent;
  border: none;
  color: var(--textoClaro);
  font-size: 1rem;
  cursor: pointer;
  padding: 0.5em;
}

button:hover {
  color: var(--colorEnfasis);
  transform: scale(1.1);
  transition: all 0.5s;
}

a {
  color: var(--textoClaro);
  text-decoration: none;
  position: relative;
  display: flex;
  align-items: center;
  padding: 1em;
}

a:hover {
  color: var(--Blanco);
  transition: all 0.5s;
}

a.router-link-exact-active {
  color: var(--Blanco);
}
a.router-link-exact-active::after {
  content: "";
  background-color: var(--colorEnfasis);
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 3px;
}

@media (max-width: 480px) {
  .opciones {
    display: none;
  }
}
</style>
