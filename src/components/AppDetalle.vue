<template>
  <div class="main">
    <app-loader v-if="loading"></app-loader>
    <div class="principal" v-else>
      <div class="poster"><img :src="film.ruta" /></div>
      <detalle-contenido class="contenido" :film="film"></detalle-contenido>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import firebase from "firebase/app";
import "firebase/firestore";
import { setTimeout } from "timers";
import DetalleContenido from "@/components/DetalleContenido.vue";
import AppLoader from "@/components/AppLoader.vue";
export default {
  name: "AppDetalle",
  components: {
    DetalleContenido,
    AppLoader
  },
  data() {
    return {
      film: {},
      loading: true
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
    var self = this;
    setTimeout(() => (self.loading = false), 500);
  }
};
</script>

<style scoped>
.principal {
  flex: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.poster {
  width: 100%;
  position: relative;
}
.poster::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to bottom,
    transparent 0%,
    var(--colorPrimario) 60%
  );
}
.poster img {
  display: block;
  width: 100%;
}
.contenido {
  padding: 0 1rem;
  position: absolute;
  top: 60vh;
}

@media (min-width: 560px) and (max-width: 1270px) {
  .contenido {
    top: 7rem;
    max-width: 900px;
  }
  .poster::after {
    opacity: 0.9;
    background: var(--colorPrimario);
  }
}

@media (min-width: 1270px) {
  .contenido {
    position: static;
    padding: 0;
  }
  .principal {
    margin: 0 auto;
    max-width: 1270px;
    display: grid;
    grid-gap: 2em;
    grid-template-columns: 30% 1fr;
  }
  .poster {
    position: static;
    box-shadow: 0 0 1rem var(--Negro);
  }
  .poster::after {
    display: none;
  }
}
</style>
