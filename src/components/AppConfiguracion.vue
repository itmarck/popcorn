<template>
  <div class="principal">
    <header class="header">
      <h2 class="header__title">Configuracion</h2>

      <div class="header__subtitle">
        <i class="icofont-ui-keyboard"></i>
        <i class="icofont-question-circle "></i>
        <input v-on:click="ocultar = !ocultar" type="checkbox" />
        <label for="">Mostrar configuracion avanzada</label>
      </div>
    </header>
    <div class="option">
      <div class="option__title"><h3>Intezfaz de usuario</h3></div>
      <div class="option__options">
        <div class="option__item">
          <label for="">Idioma predeterminado</label>
          <select>
            <option value="es">Español</option>
            <option value="en">English</option>
            <option value="de">Deutsh</option>
          </select>
        </div>
        <div class="option__item">
          <label for="">Apariencia</label>
          <select>
            <option value="1">Official - Dark</option>
            <option value="2">Flat UI</option>
            <option value="3">Black & Yellow</option>
          </select>
        </div>
        <div class="option__item" v-if="ocultar">
          <label for="">Pantalla de inicio</label>
          <select>
            <option value="peliculas">Peliculas</option>
            <option value="series">Series</option>
            <option value="anime">Anime</option>
            <option value="indie">Indie</option>
          </select>
        </div>
        <div class="option__item" v-if="ocultar">
          <input type="checkbox" />
          <label for="">Traducir Sinopsis</label>
        </div>
        <div class="option__item">
          <input type="checkbox" />
          <label for="">Mostrar valoracion en las portadas</label>
        </div>
        <div class="option__item" v-if="ocultar">
          <input type="checkbox" />
          <label for="">Recordar filtros</label>
        </div>
        <div class="option__item" v-if="ocultar">
          <label for="">Elementos vistos</label>
          <select>
            <option value="D">Desvanecer</option>
            <option value="M">Mostrar</option>
            <option value="O">Ocultar</option>
          </select>
        </div>
      </div>
    </div>
    <div class="option">
      <div class="option__title"><h3>Subtitulos</h3></div>
      <div class="option__options">
        <div class="option__item">
          <label>Subtitulos por defecto</label>
          <select>
            <option value="non">Desactivados</option>
            <option value="es">Español</option>
            <option value="en">English</option>
            <option value="de">Deutsh</option>
          </select>
        </div>
        <div class="option__item">
          <label for="">Tamaño</label>
          <select>
            <option value="20">20px</option>
            <option value="22">22px</option>
            <option value="28">28px</option>
            <option value="30">30px</option>
          </select>
        </div>
      </div>
    </div>
    <div class="option">
      <div class="option__title"><h3>Trarkt.tv</h3></div>
      <div class="option__options">
        <div>
          <p class="option__item">
            Conecta a Trakt.tv para sincronizar en Popconr Time los episodios
            que ves
          </p>
          <button class="option__item">Conectar A Trakt</button>
        </div>
      </div>
    </div>
    <div class="option">
      <div class="option__title"><h3>TVShow Time</h3></div>
      <div class="option__options">
        <button class="option__item">Conectar A TVShow Time</button>
      </div>
    </div>
    <div class="option">
      <div class="option__title">
        <h3>{{ nombre }}</h3>
      </div>
      <div class="option__options">
        <div class="option__item">
          <label for="">Nombre</label> <input type="text" v-model="aux" />
        </div>
        <button class="option__item" v-on:click="cambiarNombre()">
          Cambiar Nombre
        </button>
      </div>
    </div>
    <div class="option">
      <div class="option__title"><h3>Características</h3></div>
      <div class="option__options">
        <div class="option__item" v-if="ocultar">
          <input type="checkbox" />
          <label for="">Coleccion de torrents</label>
        </div>
        <div class="option__item" v-if="ocultar">
          <input type="checkbox" />
          <label for="">Lista de Visionado</label>
        </div>
        <div class="option__item">
          <input type="checkbox" />
          <label for="">Boton de Seleccion Aleatoria</label>
        </div>
      </div>
    </div>
    <footer class="footer">
      <button class="footer__item">Limpiar todas las bases de datos</button>
      <button class="footer__item">
        Restablecer la configuración predeterminada
      </button>
    </footer>
  </div>
</template>
<script>
export default {
  data() {
    return {
      ocultar: true,
      nombre: "Perfil",
      aux: ""
    };
  },
  methods: {
    cambiarNombre() {
      this.nombre = this.aux;
      this.aux = "";
    }
  }
};
</script>
<style scoped>
.principal {
  flex-direction: column;
}
.header__title {
  font-size: 1.6em;
}
.header {
  margin: auto;
}

.header__subtitle i {
  margin-right: 0.3em;
}
.icofont-ui-keyboard,
.icofont-question-circle {
  font-size: 1.35em;
}
.option,
.header {
  margin: 2em;
  display: flex;
  flex-flow: column;
}
.option {
  align-items: center;
}
.option__title {
  width: 50%;
  margin-right: 40%;
}
.option__options {
  display: flex;
  flex-flow: column;
  margin-top: 1em;
  width: 20em;
}
.option__item {
  margin: 0.5em;
  width: 18.5em;
}
.option__item label {
  margin: 0.5em;
  margin-left: 0%;
}
button,
select {
  border-radius: 0.3em;
  padding: 0.3em;
  border: none;
  background-color: rgb(29, 75, 143);
  color: var(--Blanco);
}
button {
  width: 15em;
}
.footer {
  display: flex;
  justify-content: center;
  margin-right: 0em;
}
.footer__item {
  margin: 0.5em 0.5em;
}

@media (min-width: 500px) and (max-width: 1000px) {
  .header {
    align-items: center;
  }
}

@media (min-width: 1000px) {
  .header,
  .option {
    flex-direction: unset;
    width: 37em;
    align-items: unset;
    margin-left: 8em;
  }
  .header {
    align-items: center;
    justify-content: space-between;
  }
  .footer {
    margin-right: 8em;
    justify-content: flex-end;
  }
  .option__title {
    margin-right: 0%;
  }
}
</style>
