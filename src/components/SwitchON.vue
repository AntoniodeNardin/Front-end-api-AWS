<script>
export default{
  data(){
    return{
      ec2_stop: 'http://localhost:8000/teste/EC2/stop/',
      rds_stop: 'http://localhost:8000/teste/RDS/stop/',
      validated:false
    }
  },
    props:{
    id: Number,
    type: String
  },
  }
</script>
<template>
  <div>
    <a v-if="type == 'EC2' " :href="ec2_stop+id" class="switch">ON</a>
    <a v-else :href="rds_stop+id" class="switch">ON</a>
  </div>
</template>
<style scoped>
.switch{
  background-color: green;
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
