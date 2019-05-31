<template>
  <div class="main">
    <header class="header item">
      <h2>Configuracion</h2>
      <div>
        <i class="icofont-ui-keyboard"></i>
        <i class="icofont-question-circle "></i>
        <input type="checkbox" id="more" v-model="mostrar" />
        <label for="more">Mostrar configuracion avanzada</label>
      </div>
    </header>
    <section class="section">
      <h3 class="title">{{ nombre }}</h3>
      <form class="options" @submit.prevent="cambiarNombre">
        <div class="item">
          <label>Nombre</label>
          <input type="text" placeholder="Escriba nombre" v-model="nombreAux" />
        </div>
        <button type="submit">Cambiar nombre</button>
      </form>
    </section>
    <section class="section">
      <h3 class="title">Intezfaz de usuario</h3>
      <div class="options">
        <div class="item">
          <label>Idioma</label>
          <select>
            <option>Español</option>
            <option>English</option>
            <option>Deutsh</option>
          </select>
        </div>
        <div class="item">
          <label>Apariencia</label>
          <select v-model="temaPage" @change="cambiarTema">
            <option value="dark">Dark</option>
            <option value="light">Light</option>
          </select>
        </div>
        <div class="item">
          <label>Elementos vistos</label>
          <select>
            <option>Desvanecer</option>
            <option>Mostrar</option>
            <option>Ocultar</option>
          </select>
        </div>
        <div class="item" v-if="mostrar">
          <label>Pantalla de inicio</label>
          <select>
            <option value="peliculas">Peliculas</option>
            <option value="series">Series</option>
            <option value="anime">Anime</option>
            <option value="indie">Indie</option>
          </select>
        </div>
        <div class="item check" v-if="mostrar">
          <input type="checkbox" />
          <span>Traducir Sinopsis</span>
        </div>
        <div class="item check" v-if="mostrar">
          <input type="checkbox" />
          <span>Mostrar valoracion en las portadas</span>
        </div>
        <div class="item check" v-if="mostrar">
          <input type="checkbox" />
          <span>Recordar filtros</span>
        </div>
      </div>
    </section>
    <section class="section">
      <h3 class="title">Subtitulos</h3>
      <div class="options">
        <div class="item">
          <label>Subtitulos por defecto</label>
          <select>
            <option>Desactivados</option>
            <option>Español</option>
            <option>English</option>
            <option>Deutsh</option>
          </select>
        </div>
        <div class="item">
          <label>Tamaño</label>
          <select>
            <option>20px</option>
            <option>22px</option>
            <option>28px</option>
            <option>30px</option>
          </select>
        </div>
      </div>
    </section>
    <section class="section" v-if="mostrar">
      <h3 class="title">Trarkt.tv</h3>
      <div class="options">
        <div class="item reverse">
          <span>
            Conecta a Trakt.tv para sincronizar en Popconr Time los episodios
            que ves
          </span>
          <button>Conectar a Trakt</button>
        </div>
      </div>
    </section>
    <section class="section" v-if="mostrar">
      <h3 class="title">TVShow Time</h3>
      <div class="options">
        <button>Conectar A TVShow Time</button>
      </div>
    </section>
    <section class="section">
      <h3 class="title">Características</h3>
      <div class="options">
        <div class="item check">
          <input type="checkbox" />
          <span>Coleccion de torrents</span>
        </div>
        <div class="item check">
          <input type="checkbox" />
          <span>Lista de visionado</span>
        </div>
        <div class="item check">
          <input type="checkbox" />
          <span>Botón de selección aleatoria</span>
        </div>
      </div>
    </section>
    <footer class="footer">
      <button @click="restablecerFavoritos">
        RESTABLECER FAVORITOS
      </button>
      <button>Restablecer configuración</button>
    </footer>
  </div>
</template>
<script>
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      mostrar: false,
      nombre: "Username",
      nombreAux: "",
      temaPage: localStorage.getItem("tema") || "dark"
    };
  },
  methods: {
    cambiarTema() {
      this.establecerTema(this.temaPage);
      this.aplicarTema();
    },
    cambiarNombre() {
      this.nombre = this.nombreAux;
      this.nombreAux = "";
    },
    restablecerFavoritos() {
      localStorage.clear();
      location.reload();
    },
    ...mapMutations(["aplicarTema", "establecerTema"])
  }
};
</script>

<style scoped>
.main {
  grid-gap: 3em;
  width: 100%;
  max-width: 1270px;
  margin: 0 auto;
  padding: 1em;
  box-sizing: border-box;
}

.header,
.section,
.reverse {
  flex-direction: column;
}

.main,
.options,
.footer {
  display: grid;
}

input,
button,
select {
  flex: auto;
  background-color: var(--colorOscuro);
  color: var(--Blanco);
  padding: 1em;
  border: none;
  border-radius: 1em;
}

h2,
.title,
input,
button,
select {
  margin: 0;
}

.section,
.item {
  display: flex;
  justify-content: space-between;
}

.title {
  margin-bottom: 1em;
}

label {
  width: 30%;
}

label,
span {
  color: var(--textoClaro);
  font-size: 0.9rem;
}

.options {
  flex: auto;
}

.item {
  align-items: center;
}

.check {
  justify-content: flex-start;
}

.reverse {
  align-items: stretch;
}

.reverse button {
  margin-top: 1em;
}

input[type="checkbox"] {
  flex: 0;
  margin-right: 1em;
}

.footer {
  grid-template-columns: 1fr 1fr;
}

.options,
.footer {
  grid-gap: 1em;
}

button {
  cursor: pointer;
}

.icofont-ui-keyboard,
.icofont-question-circle {
  font-size: 1.5em;
  margin-right: 1em;
}

@media (min-width: 640px) and (max-width: 1270px) {
  .header {
    flex-direction: row;
  }
  .options {
    margin-left: 2em;
  }
}

@media (min-width: 1270px) {
  .header,
  .section {
    flex-direction: row;
  }
  .title {
    width: 30%;
  }
}
</style>
