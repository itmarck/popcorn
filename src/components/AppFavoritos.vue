<template>
 <div class="principal" v-if="this.favoritos.length">
   <div>
     <h2 v-if="this.peliculasF.length">PELICULAS</h2>
      <section>
        <app-poster
          v-for="film in peliculasF" 
          :key="film.id"
          :poster="{ ...film}"
        ></app-poster>
      </section>
    </div>
    <div>
      <h2 v-if="this.seriesF.length">SERIES</h2>
      <section>  
        <app-poster
          v-for="film in seriesF" 
          :key="film.id"
          :poster="{ ...film}"
        ></app-poster>
      </section>
    </div>
    <div>
      <h2 v-if="this.animesF.length">ANIMES</h2>
      <section> 
        <app-poster
          v-for="film in animesF" 
          :key="film.id"
          :poster="{ ...film}"
        ></app-poster>
      </section>
    </div>
    <div>
      <h2 v-if="this.indieF.length">INDIE</h2>
      <section>
        <app-poster
          v-for="film in indieF" 
          :key="film.id"
          :poster="{ ...film}"
        ></app-poster>
      </section>
    </div>
  </div> 
    <h2  v-else class="advertencia">
      NO TIENES NINGÚN FAVORITO ☹️💔
    </h2>
</template>

<script>
import AppPoster from "@/components/AppPoster.vue";
import { mapState} from "vuex";

export default {
  
  components:{
    AppPoster
  },
  data(){
    return{
     peliculasF:[],
     seriesF:[],
     animesF:[],
     indieF:[]
    }
  }, 
  computed:{
    ...mapState(["favoritos"])
  },
  created(){
    this.favoritos.forEach(element => {
      if(element.coleccion=='peliculas'){
        this.peliculasF.push(element)
      }else if(element.coleccion=='series'){
        this.seriesF.push(element)
      }else if(element.coleccion=='anime'){
        this.animesF.push(element)
      }else if(element.coleccion=='indie'){
        this.indieF.push(element)
      }
    });
  },
};
</script>

<style scoped>
.principal{
  display: block;
}
section {
  margin: 1rem;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(1, 1fr);
}

h2{
  font-weight: normal;
  margin: 0.5em;
}

.advertencia{
  display: block;
  text-align: center;
  
}
@media (min-width: 320px) and (max-width: 480px) {
  section {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 480px) and (max-width: 640px) {
  section {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (min-width: 640px) and (max-width: 800px) {
  section {
    grid-template-columns: repeat(4, 1fr);
  }
}

@media (min-width: 800px) and (max-width: 1080px) {
  section {
    grid-template-columns: repeat(5, 1fr);
  }
}

@media (min-width: 1080px) and (max-width: 1270px) {
  section {
    grid-template-columns: repeat(6, 1fr);
  }
}

@media (min-width: 1270px) {
  section {
    grid-template-columns: repeat(7, 1fr);
  }
}
</style>
