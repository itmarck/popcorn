<template>
  <div class="contenedor">
    <div class="principal">
      <div class="cabecera">
        <div class="banner">
          <img class="portada" src="../../public/info/banner.png" />
          <img class="frase_portada" src="../../public/info/frase.png" />
        </div>
      </div>
      <div class="cuerpo">
        <div class="cuerpo_cuerpo">
          <div class="mensaje">
            <div class="titulo">
              <h1>Nuestro Proposito</h1>
            </div>
            <div class="frase">
              <p>¡Transformamos una pelicula cualquiera en una historia extraordinaria!</p>
            </div>
          </div>
          <div class="imagen">
            <img src="../../public/info/objetivo.png" alt="">
          </div>
        </div>
        <div class="cuerpo_cuerpo2">
          <div class="imagen">
            <img src="../../public/info/vision.png" alt="">
          </div>
          <div class="mensaje2">
            <div class="titulo2">
              <h1>Conectate con la Pelicula</h1>
            </div>
          </div>
        </div>
        <div class="cuerpo_cuerpo">
          <div class="mensaje">
            <div class="titulo">
              <h1>Miranos desde donde sea</h1>
            </div>
            <div class="frase">
              <p>Disponibles en Android y iPhone.</p>
            </div>
          </div>
          <div class="imagen">
            <img src="../../public/info/movil.png" alt="">
          </div>
        </div>
      </div>
      <div class="footer">
        <div class="integrantes">
          <h1>Integrantes</h1>
        </div>
        <div class="lista">
          <ul>
          <li>Marcelo Velásquez Villar</li>
          <li>Javier Arturo Chávez Sialer</li>
          <li>Fabían Andrés Pacherres Bautista</li>
          <li>David Miguel Rioja Paz</li>
          <li>Christian Robert Torres Flores</li>
        </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.contenedor {
  height: 2000px;
}
.principal {
  width: 100%;
  height: 1000px;
  margin-left: 10%;
  margin-right: 10%;
}
.cabecera{
  width: 100%;
  height: auto;
  margin-bottom: 12%;
}
.banner{
  width: 100%;
  position: relative;
}
.portada{
  width: 100%;
  height: auto;
  display: block;
}
.frase_portada{
  position: absolute;
  width: 40%;
  bottom: 5%;
  left: 5%;
}
.cuerpo{
  width: 100%;
  height: auto;
}
.cuerpo_cuerpo{
  width: 100%;
  height: auto;
  display: flex;
  margin-top: 12%;
  margin-bottom: 12%;
}
.cuerpo_cuerpo2{
  width: 100%;
  height: auto;
  display: flex;
  margin-top: 12%;
  margin-bottom: 12%;
}
.mensaje{
  width: 40%;
  height: auto;
  margin-top: auto;
  margin-bottom: auto;
}
.titulo{
  width: 80%;
  height: auto;
}
.titulo h1{
  font-size: 45px;
  margin: 0;
  color: var(--colorEnfasis);
}
.mensaje2{
  width: 40%;
  height: auto;
  margin-top: auto;
  margin-bottom: auto;
  display: flex;
}
.titulo2{
  width: 100%;
  height: auto;
  flex-direction: row-reverse;
}
.titulo2 h1{
  font-size: 60px;
  margin: 0;
  color: var(--colorEnfasis);
  text-align: right;
  width: 100%;
}
.frase{
  width: 100%;
}
.frase p{
  width: 80%;
}
.imagen{
  width: 60%;
  height: auto;
}
.imagen img{
  width: 100%;
  height: auto;
}
.footer{
  display:flex;
  justify-content: space-between;
}
.integrantes{
  width: 40%;
  height: auto;
}
.lista{
 width: 60%;
 height: auto;
}
.footer h1{
  font-family: 25px;
  text-transform: uppercase;
}
ul li{
  text-align: right;
  width: 100%;
  list-style: none;
}

@media screen and (max-width: 800px) {
  .cabecera{
    display: none;
  }
  .cuerpo_cuerpo{
    flex-direction: column;
  }
  .mensaje{
    width: 100%;
  }
  .imagen{
    width: 100%;
  }
  .titulo{
    width: 100%;
  }
  .titulo h1{
    width: 100%;
    font-size: 25px;
    margin: 0;
    text-align: center;
  }
  .titulo2{
    width: 100%;
  }
  .titulo2 h1{
    font-size: 20px;
    margin: 0;
    width: 100%;
    text-align: center;
    margin-bottom: 10%;
  }
  .mensaje2{
    width: 100%;
  }
  .cuerpo_cuerpo2{
    flex-direction: column-reverse;
  }
  .frase p{
    width: 100%;
    text-align: center;
  }


  .footer{
    flex-direction: column;
  }
  .integrantes{
    width: 100%;
  }
  .footer h1{
    text-align: center;
  }
  .lista{
    width: 100%;
  }
  ul li{
    text-align: center;
  }
  ul{
    padding: 0;
    margin: 0;
  }
}
</style>

