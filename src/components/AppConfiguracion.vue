<template>
  <div class="principal">
    <header class="header">
      <h2 class="header__title">Configuracion</h2> 
      <div class="header__subtitle">
          <i  class="icofont-ui-keyboard header__item"></i>
          <i class="icofont-question-circle header__item"></i>
          <input v-on:click="ocultar = !ocultar" class="header__item" type="checkbox"> 
          <label class="header__item" for="">Mostrar configuracion avanzada</label>
      </div>
    </header>
    <div class="option">
          <div class="class__title"><h3>Intezfaz de usuario</h3></div>
          <div class="option__options">
              <div class="label__select" >   
                  <label for="">Idioma predeterminado</label>
                  <select >
                      <option value="es">Español</option>
                      <option value="en">English</option>
                      <option value="de">Deutsh</option>
                    </select>
                </div>  
              <div class="label__select" > 
                  <label for="">Apariencia</label>
                  <select>
                      <option value="1">Official - Dark</option>
                      <option value="2">Flat UI</option>
                      <option value="3">Black & Yellow</option>
                    </select>
                </div> 
              <div class="label__select" v-if="ocultar" > 
                  <label for="">Pantalla de inicio</label>
                  <select>
                      <option value="peliculas">Peliculas</option>
                      <option value="series">Series</option>
                      <option value="anime">Anime</option>
                      <option value="indie">Indie</option>
                    </select>
              </div>
              <div class="label__select" v-if="ocultar" >
                <input type="checkbox"> 
                <label for="">Traducir Sinopsis</label>
              </div>
              <div class="label__select">
                <input type="checkbox"> 
                <label for="">Mostrar valoracion en las portadas</label>
              </div>
              <div class="label__select" v-if="ocultar" >
                <input type="checkbox"> 
                <label for="">Recordar filtros</label>
              </div>
              <div class="label__select" v-if="ocultar" > 
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
        <div class="class__title" ><h3>Subtitulos</h3></div>
        <div class="option__options">
          <div class="label__select" >   
                  <label for="">Sustitulos prederteminados</label>
                  <select >
                      <option value="non">Desactivados</option>
                      <option value="es">Español</option>
                      <option value="en">English</option>
                      <option value="de">Deutsh</option>
                  </select>
          </div>
          <div class="label__select" >   
                  <label for="">Tamaño</label>
                  <select >
                      <option value="20">20px</option>
                      <option value="22">22px</option>
                      <option value="28">28px</option>
                      <option value="30">30px</option>
                  </select>
          </div>
          </div>
    </div>
    <div class="option">
      <div class="class__title"><h3>Trarkt.tv</h3></div>
          <div class="option__options">
            <div class="class-description" ><p>Conecta a Trakt.tv para sincronizar en Popconr Time los episodios que ves</p>
            <button>Conectar A Trakt</button>
          </div>
      </div>
    </div>
    <div class="option">
      <div class="class__title"><h3>TVShow Time</h3></div>
          <div class="option__options"><button>Conectar A TVShow Time</button>
      </div>
    </div>
     <div class="option">
      <div class="class__title"><h3>{{nombre}}</h3></div>
      <div class="option__options"> 
        <div class="label__select"><label for="">Nombre</label> <input type="text" v-model="aux"></div>
        <button v-on:click="cambiarNombre()" >Cambiar Nombre</button>
      </div>
    </div>
    <div class="option">
      <div class="class__title"><h3>Características</h3></div>
      <div class="option__options">
        <div class="label__select" v-if="ocultar" >
            <input type="checkbox"> 
            <label for="">Coleccion de torrents</label>
        </div>
        <div class="label__select" v-if="ocultar">
            <input type="checkbox"  > 
            <label for="">Lista de Visionado</label>
        </div>
         <div class="label__select">
            <input type="checkbox"> 
            <label for="">Boton de Seleccion Aleatoria</label>
         </div>
          
      </div>
    </div>
    <footer class="footer">
      <button class="footer__item">Limpiar todas las bases de datos</button>
      <button class="footer__item">Restablecer la configuración predeterminada</button>
    </footer>
  </div>
</template>
<script>
export default {
  data(){
    return{
      ocultar : true, 
      nombre: 'Perfil',
      aux: ''
    }
  },
  methods: {
    cambiarNombre(){
      this.nombre = this.aux;
      this.aux = '';
    }
  },
}
</script>
<style scoped>
  .principal{
    display: block;
  }
  .header{
    display: flex;
    align-items: center;
    margin-left: 8em;
  }
  .header__title{
    font-size: 1.6em;
    margin-right: 5em;
  }
  .class__title{
    margin-top: 0em;
    width: 11em;
    margin-right: 7.3em;
  }
  .header__item{
    margin: 0.5em;
  }
  .icofont-ui-keyboard, .icofont-question-circle{
    font-size: 1.35em;
  }
  .option{
    margin: 2em;
    display: flex;
    margin-left: 8em;
  }
  .option__options{
    display: flex;
    flex-flow: column;
    margin-top: 1em;
  }
  .label__select{
    margin: 0.5em;
  }
  .label__select label{
    margin: 0.5em;
  }
  button, select{
    border-radius: 0.3em;
    height: 2em;
    border: none;
    background-color: rgb(29, 75, 143);
    color: var(--Blanco);
    
  } 

  .footer{
    margin-right: 8em; 
    display: flex;
    justify-content: flex-end;
  }
  .footer__item{
        margin: 0 0.5em;
      }

  @media (max-width: 600px) {
      .header, .option{
        flex-flow: column;
      }
      .option{
        margin-left: 1.3em;
      }
      .header{
        margin-left: 0.95em;
      }

      .option__options{
        margin-left: 0em; 
      }
      button{
        width: 15em;
      }
       .footer{
         justify-content: center;
        margin-right: 0em;
      }
       .footer__item{
         margin: 0 ;
         height: 3.5em;
        border: 0.1em solid black;
      }
      
  }
  
  @media (min-width: 600px) and (max-width: 800px) {
      .header, .option{
        flex-flow: column;
      }
      .header{
        margin-left: 0.95em;
      }

      .option__options{
        margin-left: 7em; 
      }
      button{
        width: 20em;
      }
      .footer{
        justify-content: center;
         margin-right: 0em;
      }
      .footer__item{
        
        height: 2.5em;
      }
  }
</style>
