<template>
    <div>
        <h1>hello from sale page</h1>

        <div v-if="loading">Carregando Lista....</div>

        <table v-else>

            <thead>

                <tr>

                    <th>Nome do aluno</th>
                    <th>Nome do curso</th>
                    <th>Data</th>
                    <th>valor</th>

                </tr>

            </thead>

            <tbody>

                <tr v-for="sale in listSale" v-bind:key="sale.id">
                
                    <td>{{sale.Name}}</td>
                    <td>{{sale.Name_Product}}</td>
                    <td>{{sale.Sale_Date}}</td>
                    <td></td>
                    <td>{{sale.Total}} </td> 
                    
                </tr> 

                <button @click="getListSale()"> listar vendas</button>

            </tbody> 

        </table>


    </div>
</template>

<script>

    export default{
        data(){
            return {
                listSale: [],
                loading:false,
            }
        },

        mounted(){
            this.getListSale()
        },

        methods:{
            getListSale(){
                const api = 'https://dashboardmege.herokuapp.com/api/sales'
                this.loading = true 
                this.axios.get(api).then((response) =>{
                    this.listSale = response.data
                    this.loading = false
                } )
            }
    
        }


    }

</script>

<style>

</style>