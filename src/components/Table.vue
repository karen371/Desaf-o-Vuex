<script>
import { mapState } from "vuex";
import Button from "./Button.vue";
export default {
  components:{
    Button
  },
  computed: {
    ...mapState(["juegos"]) 
  },
  created() {
    this.$store.dispatch("getJuegos");
  }
};
</script>
<template>
    <section>
        <div class="title"><h2 class="text-center">Lista de Juegos</h2></div>
        <div class="table-responsive">
        <table class="table table-hover table-bordered">
            <thead>
            <tr>
                <th>Codigo</th>
                <th>Nombre</th>
                <th>Stock</th>
                <th>Precio</th>
                <th>Acciones</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="juego in juegos" :key="juego.id">
                <td>{{ juego.codigo }}</td>
                <td>{{ juego.nombre }}</td>
                <td>{{ juego.stock }}</td>
                <td>{{ juego.precio }}</td>
                <td><Button :juego="juego" /></td>
            </tr>
            </tbody>
        </table>
        </div>
    </section>
</template>
  

  <style scoped>
  section{
    margin-top: 30px;
  }
  .title{
    margin-bottom: 20px;
  }
    /* Estilos por defecto (modo claro) */
  .table {
    color: #000; 
    background-color: #fff; 
    border-color: #ccc; 
  }

  /* Estilos para modo oscuro */
  @media (prefers-color-scheme: dark) {
    .table {
      color: #f8f8f8; 
      background-color: #444; 
      border-color: #555; 
    }

    .table th {
      background-color: #666; 
    }
  }
  /* Opcional: Estilos adicionales para personalizar el encabezado */
  .table th {
    background-color: #f8f8f8; 
  }

  /* Cambia el fondo de los encabezados en modo oscuro */
  @media (prefers-color-scheme: dark) {
    .table th {
      background-color: #666; 
      color: #fff;
    }
    .table td {
      background-color: #181818; 
      color: #fff;
    }
    
    .table tr:hover {
      background-color: #333; 
    }
  }
</style>
  