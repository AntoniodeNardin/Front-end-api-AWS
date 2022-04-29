<script>
import Switch from "./Switch.vue"
 export default {
    props: {
        instance: {
            type: Object,
            required: true
        }
    },
    mounted() {
    },
    components: { Switch },
}
</script>

<template>
<div class="card" >
        <div class="topo-card">{{ instance.name }}</div>
        <div class="card-content">

          <h4>ID : {{ instance.id }}</h4>
          <h4>STATUS : {{ instance.status }}</h4>
          <h4>MONITORAMENTO : {{ instance.monitor }}</h4>
          <h4>IMAGE ID : {{ instance.image_id }}</h4>
          <h4>TIPO : {{ instance.type }}</h4>
          
          <Switch></Switch>
        </div>
        </div>
</template>
<style scoped>
.topo-card{
  text-transform: capitalize;
  font-size: 18px;
  padding: 25px;
}
.card {
  width: 20vw;
  margin: 20px;
  height: 500px;
  border-radius: 20px;
  background-color: white;
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

</style>

