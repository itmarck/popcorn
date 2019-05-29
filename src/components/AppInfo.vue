<template>
  <div class="contenedor">
    <div class="principal">
      <div class="cabecera">
        <div class="banner">
          <img class="portada" src="../../public/info/banner.png" />
          <img class="titulo" src="../../public/info/frase.png" />
        </div>
      </div>
      <div class="cuerpo">
        <div class="cuerpo1">
          <div class="mensaje">
            <div class="mensaje__titulo">
              <h1>Nuestro Objetivo</h1>
            </div>
            <div class="mensaje__mensaje">
              <p>
                ¡Transformamos una pelicula cualquiera en una historia
                extraordinaria!
              </p>
            </div>
          </div>
          <div class="mensaje_img">
            <img src="../../public/info/objetivo.png" alt="" />
          </div>
        </div>
        <div class="cuerpo1">
          <div class="mensaje2_img">
            <img src="../../public/info/Vision.png" alt="" />
          </div>
          <div class="mensaje2">
            <div class="mensaje2__titulo">
              <h1>Te Conectamos con la Pelicula</h1>
            </div>
          </div>
        </div>
        <div class="cuerpo1">
          <div class="mensaje">
            <div class="mensaje__titulo">
              <h1>Míranos desde donde sea</h1>
            </div>
            <div class="mensaje__mensaje">
              <p>Disponibles en Android y iPhone.</p>
            </div>
          </div>
          <div class="mensaje_img">
            <img src="../../public/info/movil.png" alt="" />
          </div>
        </div>
      </div>
      <div class="footer">
        <h1>Integrantes</h1>
        <ul>
          <li>Marcelo Velásquez Villar</li>
          <li>Javier Arturo Chávez Sialer</li>
          <li>Fabían Andrés Pacherres Bautita</li>
          <li>David Miguel Rioja Paz</li>
          <li>Chritian Robert Torres Flores</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.contenedor {
  background: var(--Negro);
  height: 2000px;
}
.principal {
  width: 100%;
  height: 1000px;
  margin-left: 10%;
  margin-right: 10%;
}
.cabecera {
  width: 100%;
  position: relative;
}
.portada {
  width: 100%;
  display: block;
}
.titulo {
  width: 40%;
  position: absolute;
  bottom: 5%;
  left: 5%;
}
.cuerpo {
  width: 100%;
  height: 100%;
}
.cuerpo1 {
  max-height: inherit;
  display: flex;
  margin-top: 10%;
}
.mensaje {
  width: 30%;
  height: 100%;
  margin-top: 15%;
}
.mensaje__titulo h1 {
  font-size: 50px;
  color: var(--colorEnfasis);
  margin-bottom: 0;
}
.mensaje__mensaje {
  font-size: 16px;
}
.mensaje_img {
  width: 70%;
  height: 55.6%;
  display: flex;
}
.mensaje_img img {
  width: 100%;
  float: right;
}
.mensaje2_img {
  width: 70%;
  height: 55.6%;
  display: flex;
}
.mensaje2_img img {
  width: 80%;
  float: right;
}
.mensaje2 {
  width: 40%;
  height: 100%;
  margin-top: 12%;
}
.mensaje2__titulo h1 {
  font-size: 50px;
  color: var(--colorEnfasis);
  margin-bottom: 0;
  text-align: right;
}
</style>
