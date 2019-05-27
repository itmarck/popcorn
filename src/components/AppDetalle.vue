<template>
  <div class="contenedor">
    <div class="difuminado1">
      <img class="fondo" :src="film.ruta" />
    <div class="difuminado2">
      <section class="imagen">
        <img class="portada" :src="film.ruta" :alt="film.titulo" />
      </section>
      <div class="bg-modal" v-if="pop_up" >
        <div class="modal-content">
          <button class="pop_up__Cerrar" @click="pop_up=!pop_up" ><h1>X</h1></button>
          <iframe width="853" height="480" :src="film.url" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
      <div class="contenedor__descripcion">
        <button class="button__Cerrar" @click="cerrar"><h1>X</h1></button>
        <h1 class="titulo">{{ film.titulo }}</h1>
        <ul>
            <li v-for="(genero, i) of film.generos" :key="i">{{ genero }}</li>
            <li>{{film.anio}}</li>
            <li>{{ select.coleccion.toUpperCase() }}</li>
        </ul>
        <p class="sinopsis__contenido">{{ film.sinopsis }}</p>
        <ul>
           <li v-if="this.film.temporadas > 0">temp: {{ film.temporadas }}</li>
          <li v-if="this.film.capitulos > 0">caps: {{ film.capitulos }}</li>
        </ul>
        <button class="button__Trailer" id="button__Trailer" @click="pop_up=!pop_up" v-if="!pop_up"><h1>Ver trailer</h1></button>
      </div>
    </div>
    </div>
    </div>
</template>

<script>
import { mapState } from "vuex";
import firebase from "firebase/app";
import "firebase/firestore";
export default {
  name: "AppDetalle",
  data() {
    return {
      film: {},
      pop_up: false
    };
  },
  computed: {
    ...mapState(["select"])
  },
  created() {
    if (this.select.id == "") {
      this.$router.push({ path: "/" });
    } else {
      firebase
        .firestore()
        .collection(this.select.coleccion)
        .doc(this.select.id)
        .get()
        .then(doc => {
          this.film = doc.data();
        });
    }
  },
  methods: {
    cerrar() {
      this.$router.push({ path: `/${this.select.detell}` });
    },

  }
};
</script>
<style>
.contenedor{
  position: relative;
  z-index: -1;
}
.fondo{
  width: 100%;
  height: 100%;
  position: absolute;
  filter: blur(12px);
}
.imagen {
  position: relative;
  margin-left: 80px;
  margin-top: 49px;
  margin-bottom: 40px;
  width: 308px;
  height: 462px;
  border-radius: 6px;
  z-index: 10;
}
.difuminado2{
  display: flex;
  background: var(--Negro);
  opacity: 0.8;
  position: relative;
  z-index: 0;
}
.portada{
  height: 100%;
}
.button__Cerrar{
  width: 30px;
  height: 30px;
  border: transparent;
  background: transparent;
  margin-top: 20px;
  float: right;
  margin-right: 20px;
}
.button__Cerrar h1{
  font-size: 20px;
  color: var(--colorClaro);
  margin-top: auto;
  margin-bottom: auto;
  margin-left: auto;
  margin-right: auto;
}
.button__Cerrar h1:hover{
  color: var(--Blanco);
}
.contenedor__descripcion{
  position: relative;
  z-index: 100;
}
.titulo{
  font-size: 40px;
  text-transform: capitalize;
  margin-top: 45.5px;
  margin-left: 15px;
  color: var(--Blanco); 
  margin-bottom: 0;
}
ul{
  margin-left: -40px;
}
ul li{
  display: inline-block;
  margin-left: 15px;
  font-size: 10px;
  text-transform: lowercase;
  font-weight: initial;
  margin-top: 0;
}
.sinopsis__contenido{
  text-align: justify;
  margin-left: 15px;
  margin-top: 30px;
  margin-right: 80px;
  color:var(--Blanco); 
}
.button__Trailer{
  width: 100px;
	height: 35px;
	padding: 0;
	border-radius: 3px;
	border: transparent 0.5px solid;
  background: #1F375F;
  display: inline-block;
  position: absolute;
  margin-left: 15px;
  bottom: 46.5px;
}
.button__Trailer:hover{
  background: var(--colorEnfasis);
  z-index: 20%;
}
.button__Trailer h1{
  font-size: 12px;
  color: var(--Blanco);
  margin-top: 8px;
}
.pop_up__Cerrar{
  position: absolute;
  top: 47px;
  right: 235px;
  width: 30px;
  height: 30px;
  border-radius:15px;
  cursor:pointer;
  background: transparent;
}
.pop_up__Cerrar h1{
  font-size: 10px;
  color: #11C4FF;
  margin-top: auto;
  margin-bottom: auto;
  margin-left: auto;
  margin-right: auto;
}
.bg-modal{
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.7);
  position: absolute;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal-content{
  width: 853px;
  height: 480px;
  background-color: white;
  border-radius: 4px;
}
</style>

