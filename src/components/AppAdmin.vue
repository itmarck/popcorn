<template>
  <div>
    <form @submit.prevent="add">
      <select>
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
      <input type="text" v-model="generos" placeholder="Drama,Aventura" />
      <label>Sinopsis</label>
      <input type="text" v-model="sinopsis" />
      <label>Ruta</label>
      <input type="text" v-model="ruta" placeholder="johnwick.jpg" />
      <label>Temporadas</label>
      <input type="text" v-model="temporadas" id="temp" disabled />
      <label>Capitulos</label>
      <input type="text" v-model="capitulos" id="caps" disabled />
      <button type="submit">Agregar</button>
    </form>
  </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/firestore";
export default {
  name: "AppAdmin",
  data() {
    return {
      select: "",
      titulo: "",
      anio: "",
      generos: "",
      sinopsis: "",
      ruta: "",
      temporadas: "",
      capitulos: ""
    };
  },
  methods: {
    validateFields() {
      let temporadas = document.querySelector("#temp");
      let capitulos = document.querySelector("#caps");
      if (this.select == "series" || this.select == "anime") {
        temporadas.disabled = false;
        capitulos.disabled = false;
      } else {
        temporadas.disabled = true;
        capitulos.disabled = true;
      }
    },
    add() {
      this.select = document.querySelector("select").value;
      let ref = firebase.firestore().collection(this.select);
      if (this.select == "series" || this.select == "anime") {
        ref.add({
          titulo: this.titulo,
          anio: this.anio,
          generos: this.generos.split(","),
          sinopsis: this.sinopsis,
          ruta: `posters/${this.ruta}`,
          temporadas: this.temporadas,
          capitulos: this.capitulos
        });
      } else {
        ref.add({
          titulo: this.titulo,
          anio: this.anio,
          generos: this.generos.split(","),
          sinopsis: this.sinopsis,
          ruta: `posters/${this.ruta}`
        });
      }
      this.clearFields();
    },
    clearFields() {
      this.titulo = "";
      this.anio = "";
      this.generos = "";
      this.sinopsis = "";
      this.ruta = "";
      this.temporadas = "";
      this.capitulos = "";
    }
  },
  mounted() {
    document.querySelector("select").addEventListener("change", () => {
      this.select = document.querySelector("select").value;
      this.validateFields();
    });
  }
};
</script>

<style scoped>
div {
  margin: 2em;
  display: flex;
  justify-content: center;
}
form {
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
  background-color: var(--colorOscuro);
  margin-bottom: 2em;
}
button {
  cursor: pointer;
  margin-top: 2em;
}
</style>
