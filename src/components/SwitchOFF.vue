<script>
export default{
   data(){
    return{
      ec2_start: 'http://localhost:8000/teste/EC2/start/',
      rds_start: 'http://localhost:8000/teste/RDS/start/',
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
    <a v-if="type == 'EC2' " :href="ec2_start+id" class="switch">OFF</a>
    <a v-else :href="rds_start+id" class="switch">OFF</a>
  </div>
</template>
<style scoped>
.switch{
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
