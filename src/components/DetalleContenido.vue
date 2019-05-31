<template>
  <div class="contenido">
    <div class="header">
      <div class="cabecera">
        <h1 class="titulo">{{ film.titulo }}</h1>
        <i class="icofont-ui-close back" @click="cerrar"></i>
      </div>
      <div class="descripcion">
        <p class="info">
          <span> {{ film.anio }} </span>
          <span> {{ select.coleccion.toUpperCase() }} </span>
          <span v-if="film.temporadas > 0">
            {{ film.temporadas }} Temporadas
          </span>
          <span v-if="film.temporadas > 0">
            {{ film.capitulos }} Capitulos
          </span>
        </p>
        <p class="sinopsis">{{ film.sinopsis }}</p>
        <p class="generos"><span>Generos: </span> {{ generos }}</p>
        <p class="footer">
          <button class="trailer" @click="showModal = true" v-if="film.url">
            VER TRAILER
          </button>
          720p
          <label class="switch">
            <input type="checkbox" />
            <span class="slider round"></span>
          </label>
          1080p
          <i
            class="icofont-heart"
            @click="favorito"
            :style="{ color: esFavorito ? 'var(--Heart)' : 'inherit' }"
          ></i>
        </p>
        <div class="modal" v-if="showModal">
          <i class="icofont-ui-close hide" @click="showModal = false"></i>
          <div class="video">
            <iframe :src="film.url" frameborder="0" allowfullscreen></iframe>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "DetalleContenido",
  props: {
    film: Object
  },
  data() {
    return {
      showModal: false
    };
  },
  computed: {
    esFavorito() {
      return this.favoritos.filter(e => e.id == this.film.id).length;
    },
    generos() {
      return this.film.generos ? this.film.generos.join(", ") : "";
    },
    ...mapState(["select", "favoritos"])
  },
  methods: {
    favorito() {
      if (this.esFavorito) this.quitarFav(this.film.id);
      else {
        this.agregarFav({
          ...this.film,
          coleccion: this.select.coleccion
        });
      }
      localStorage.setItem("favoritos", JSON.stringify(this.favoritos));
    },
    cerrar() {
      this.$router.go(-1);
    },
    ...mapMutations(["agregarFav", "quitarFav"])
  },
  mounted() {
    window.addEventListener("keyup", e => {
      if (e.key == "Escape") this.showModal = false;
    });
  }
};
</script>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--Negro);
  display: flex;
  justify-content: center;
  align-items: center;
}
.video {
  position: relative;
  width: 100%;
  height: 57vw;
}
iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.hide {
  position: fixed;
  top: 0;
  right: 0;
  padding: 1em;
  color: var(--Blanco);
  z-index: 100;
}
.contenido {
  display: flex;
  flex-direction: column;
}
.header {
  display: flex;
  flex-direction: column;
}

.cabecera {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.icofont-ui-close {
  cursor: pointer;
}
.back {
  display: none;
}

.descripcion {
  display: flex;
  flex-direction: column;
  color: var(--textoMasClaro);
}

.info span {
  padding-right: 1em;
}

.sinopsis {
  text-align: justify;
}

.generos {
  color: var(--textoClaro);
}

.footer {
  display: flex;
  align-items: center;
}
.trailer {
  background: var(--colorEnfasis);
  color: white;
  border: none;
  border-radius: 1em;
  margin-right: 1em;
  padding: 1em;
  cursor: pointer;
}

.icofont-heart {
  font-size: 1.5rem;
  margin-left: 1.5rem;
  cursor: pointer;
}

.icofont-heart:hover {
  color: var(--Heart);
}

.switch {
  position: relative;
  display: inline-block;
  width: 50px;
  height: 25px;
  margin: 0 0.5em;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border: 1px solid var(--Blanco);
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 18px;
  width: 18px;
  left: 3px;
  bottom: 3px;
  background-color: var(--colorEnfasis);
  transition: 0.4s;
}
input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}

@media (min-width: 560px) and (max-width: 1270px) {
  .icofont-ui-close {
    display: block;
  }
}

@media (min-width: 1270px) {
  .icofont-ui-close {
    display: block;
  }
  .contenido {
    justify-content: space-between;
  }
}
</style>
