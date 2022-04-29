<script setup>
import Header from "@/components/Header.vue";
import Card from "../components/Card.vue";
import Circle from "../components/Circle.vue";
</script>
<template>
  <div>
    <Header />
    <div class="botao">
      <a href="#" @click="getListSale()">Listar Instâncias</a>
    </div>

    <div v-if="loading"><div class="loader"></div></div>

    <div class="section" v-else>
      <Card
        v-for="instance in listInstance"
        v-bind:key="instance.id"
        v-bind:instance="instance"
      >
      </Card>
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
  padding: 0px;
  margin: 0px;
}
a {
  text-decoration: none;
  color: #09408c;
}
.botao {
  text-align: center;
  margin: 0 auto;
  margin-top: 20px;
  background-color: #f58220;
  width: 10vw;
  padding: 10px;
  border-radius: 10px;
}
.topo {
  width: 100%;
  height: 100px;
  background-color: #09408c;
}
svg {
  width: 150px;
  color: white;
  padding: 30px 80px;
}
.topo-hr {
  background-color: #f58220;
  width: 100%;
  height: 4px;
}
.topo-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
}

.section {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
#botao {
  height: 30px;
  width: 100px;
  border-radius: 8px;
  background-color: #0f4998;
  padding: 10px 20px;
  text-align: center;
  color: white;
  text-transform: none;
  text-decoration: none;
  margin: 0px 50px;
  margin-bottom: 10px;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.loader {
  border: 10px solid #f3f3f3; /* Light grey */
  border-top: 10px solid #3498db; /* Blue */
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.178);
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;
  margin: 20px auto;
}
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.switch {
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color: #2196F3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196F3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(100px);
  -ms-transform: translateX(100px);
  transform: translateX(100px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>

