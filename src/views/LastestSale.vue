<template>
  <div>
    <div v-if="loading">Carregando Lista....</div>

    <div class="section" v-else>
      <div
        class="card"
        v-for="instance in listInstance"
        v-bind:key="instance.id"
      >
        <div class="topo-card">{{ instance.name }}</div>
        <div class="card-content">
          <h4>ID : {{ instance.id }}</h4>
          <h4>STATUS : {{ instance.status }}</h4>
          <h4>MONTIORAMENTO : {{ instance.monitor }}</h4>
          <h4>IMAGE ID : {{ instance.image_id }}</h4>
          <h4>TIPO : {{ instance.type }}</h4>
        </div>
      </div>
    </div>

    <div class="botao">
      <button @click="getListSale()">listar Instancias</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      listInstance: [],
      loading: false,
    };
  },

  mounted() {
    this.getListSale();
  },

  methods: {
    getListSale() {
      const api = "http://localhost:8000/api/instances";
      this.loading = true;
      this.axios.get(api).then((response) => {
        this.listInstance = response.data;
        this.loading = false;
      });
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@600&display=swap");

body {
  background-color: #f5f5fb;
  font-family: "Montserrat", sans-serif;
}
.topo {
  width: 100%;
  height: 20px;
}
.card {
  width: 30vw;
  margin: 20px;
  border-radius: 20px;
  background-color: white;
}
.section {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.topo-card {
  background-color: #09408c;
  border-radius: 20px 20px 0px 0px;
  padding: 20px;
  text-align: center;
  color: white;
}
.card-content {
  padding: 10px 20px;
}
button {
  width: 30vw;
  display: flex;
  text-align: center;
  justify-content: center;
}
</style>

