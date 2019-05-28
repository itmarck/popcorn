<template>
  <div class="main">
    <form class="form" @submit.prevent="showFilm" @click="reset">
      <select v-model="coleccion">
        <option value="peliculas">Peliculas</option>
        <option value="series">Series</option>
        <option value="anime">Anime</option>
        <option value="indie">Indie</option>
      </select>
      <label>Titulo</label>
      <input type="text" v-model="titulo" />
      <label>Año</label>
      <input type="text" v-model="anio" placeholder="2019" />
      <label>Generos</label>
      <input type="text" v-model="generos" />
      <label>Sinopsis</label>
      <input type="text" v-model="sinopsis" />
      <label>Ruta</label>
      <input type="text" v-model="ruta" placeholder="johnwick.jpg" />
      <label>Temporadas</label>
      <input type="text" v-model="temporadas" :disabled="isTempCaps" />
      <label>Capitulos</label>
      <input type="text" v-model="capitulos" :disabled="isTempCaps" />
      <button type="submit">Agregar</button>
      <div class="display" v-show="show">{{ display }}</div>
    </form>
  </div>
</template>

<script>
export default {
  name: "AppAdmin",
  data() {
    return {
      coleccion: "peliculas",
      titulo: "",
      anio: "",
      generos: "",
      sinopsis: "",
      ruta: "",
      temporadas: "",
      capitulos: "",
      show: false
    };
  },
  computed: {
    isTempCaps() {
      if (this.coleccion != "series" && this.coleccion != "anime") return true;
      return false;
    },
    film() {
      return this.getFilm();
    },
    display() {
      return `"${this.film.titulo}" se ha agregado a ${this.film.coleccion}`;
    }
  },
  methods: {
    reset() {
      if (this.show) {
        this.coleccion = "peliculas";
        this.titulo = "";
        this.anio = "";
        this.generos = "";
        this.sinopsis = "";
        this.ruta = "";
        this.temporadas = "";
        this.capitulos = "";
        this.display = "";
        this.show = false;
      }
    },
    showFilm() {
      this.show = true;
    },
    getFilm() {
      if (!this.isTempCaps) {
        return {
          coleccion: this.coleccion,
          titulo: this.titulo,
          anio: this.anio,
          generos: this.generos.split(","),
          sinopsis: this.sinopsis,
          ruta: `posters/${this.ruta}`,
          temporadas: this.temporadas,
          capitulos: this.capitulos
        };
      } else {
        return {
          coleccion: this.coleccion,
          titulo: this.titulo,
          anio: this.anio,
          generos: this.generos.split(","),
          sinopsis: this.sinopsis,
          ruta: `posters/${this.ruta}`
        };
      }
    }
  }
};
</script>

<style scoped>
.main {
  margin: 2em;
  display: flex;
  justify-content: center;
}
.form {
  width: 100%;
  max-width: 30em;
  display: flex;
  flex-direction: column;
}

label {
  color: var(--textoClaro);
  font-size: 0.8rem;
}

input,
select,
button {
  background: var(--colorOscuro);
  padding: 1em;
  border: none;
  border-radius: 1em;
  color: var(--Blanco);
  margin: 0.5em 0 1em 0;
}
input {
  text-align: right;
  font-size: 0.8rem;
}
select {
  margin-bottom: 2em;
}
button {
  cursor: pointer;
  margin-top: 2em;
  text-align: center;
}
.display {
  text-align: center;
  padding: 1em;
}
</style>
