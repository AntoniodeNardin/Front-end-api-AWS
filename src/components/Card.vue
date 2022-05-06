<script>
import SwitchON from "./SwitchON.vue";
import SwitchOFF from "./SwitchOFF.vue";
import { useLink } from "vue-router";
export default {
  props: {
    instance: {
      type: Object,
      required: true,
    },
  },
   methods: {
 capitalizeFirst(str) {

  var subst = str.toLowerCase().replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); });
  subst = subst.replace(/-/g," ")
  subst = subst.replace(/_/g," ")
  return subst;
    },
  },
  components: { SwitchON, SwitchOFF },
};
</script>

<template>
  <div class="card">
    <div class="topo-card">{{ capitalizeFirst(instance.name)}}</div>
    <div class="card-content">
      <h4>Status : {{ instance.status }}</h4>
      <h4 v-if="instance.class">Classe : {{ instance.class }}</h4>
      <h4>Tipo : {{ instance.type }}</h4>
      <div v-if="instance.mode">
         <SwitchON :type="instance.type" :id="instance.id"></SwitchON>
      </div>
        <div v-else>
        <SwitchOFF :type="instance.type" :id="instance.id"></SwitchOFF>
      </div>
    </div>
  </div>
</template>
<style scoped>
.topo-card {
  text-transform: capitalize;
  font-size: 18px;
  padding: 25px;
}
.card {
  width: 20vw;
  margin: 30px 15px;
  border-radius: 20px;
  background-color: white;
}
.topo-card {
  background-color: #09408c;
  border-radius: 20px 20px 0px 0px;
  padding: 20px;
  text-align: center;
  color: white;
  font-size: 22px;
}
.card-content {
  padding: 10px 30px 40px 30px;
  text-align: center;
}
h4{
  font-size: 18px;
  text-decoration: underline;
}
.switch-on{
  background-color:green;
  color: white;
  width: 150px;
  margin: 0 auto;
  padding: 10px 10px;
  border-radius: 30px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
}
.switch-off{
  background-color:red;
  color: white;
  width: 150px;
  margin: 0 auto;
  padding: 10px 10px;
  border-radius: 30px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
}
</style>

