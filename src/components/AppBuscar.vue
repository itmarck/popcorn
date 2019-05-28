<template>
  <div class="main">
    <input
      class="input"
      type="text"
      v-model="titulo"
      placeholder="Buscar por titulo"
      @keyup="filtrar"
    />
    <div class="posters">
      <app-poster
        v-for="film in listaFiltrada"
        :key="film.id"
        :poster="film"
      ></app-poster>
    </div>
  </div>
</template>

<script>
import firebase, { firestore } from "firebase";
import "firebase/firestore";
import AppPoster from "@/components/AppPoster.vue";
export default {
  name: "AppBuscar",
  components: {
    AppPoster
  },
  data() {
    return {
      titulo: "",
      cartelera: [],
      listaFiltrada: []
    };
  },
  methods: {
    filtrar() {
      if (this.titulo.trim().length > 0) {
        this.listaFiltrada = this.cartelera.filter(film =>
          this.incluye(
            this.limpiarCadena(film.titulo),
            this.limpiarCadena(this.titulo)
          )
        );
      } else this.listaFiltrada = [];
    },
    limpiarCadena(cadena) {
      let chars = {
        á: "a",
        é: "e",
        í: "i",
        ó: "o",
        ú: "u",
        Á: "A",
        É: "E",
        Í: "I",
        Ó: "O",
        Ú: "U"
      };
      let expr = /[áàéèíìóòúùñ]/gi;
      let res = cadena.replace(expr, e => chars[e]);
      return res.toLowerCase().trim();
    },
    incluye(cadena, letras) {
      for (let i = 0; i < letras.length; i++) {
        const char = letras[i];
        if (!cadena.includes(char)) {
          return false;
        }
      }
      return true;
    },
    llenarCarteleraDe(coleccion) {
      firebase
        .firestore()
        .collection(coleccion)
        .get()
        .then(snap => {
          snap.forEach(doc => {
            this.cartelera.push({
              id: doc.id,
              coleccion,
              titulo: doc.data().titulo,
              anio: doc.data().anio,
              ruta: doc.data().ruta
            });
          });
        });
    }
  },
  created() {
    this.llenarCarteleraDe("peliculas");
    this.llenarCarteleraDe("series");
    this.llenarCarteleraDe("anime");
    this.llenarCarteleraDe("indie");
  }
};
</script>

<style scoped>
.main {
  flex-direction: column;
}
.input {
  background: var(--colorOscuro);
  padding: 1em;
  border: none;
  border-radius: 1em;
  color: var(--Blanco);
  margin: 1.5rem 1rem;
  margin-bottom: 0;
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

