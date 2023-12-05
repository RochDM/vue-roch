<template>
    <img :src="jugadorData.strThumb" alt="">
    <h1>{{jugadorData.strPlayer}}</h1>
    <h2>Lugar de nacimiento: {{ jugadorData.strBirthLocation }}</h2>
    <h2>Genero: {{ jugadorData.strGender }}</h2>
    <h2>Posicion: {{ jugadorData.strPosition }}</h2>
    <h4>Descripcion: {{ jugadorData.strDescriptionEN }}</h4>
</template>

<script>
    import axios from 'axios'

    export default{
        name: "JugadoresDetails",
        components:{

        },
        props:["jugador"],
        data(){
            return{
                jugadorData:[],
            }
        },
        mounted(){
            const name = this.$route.params.name
            axios.get('https://thesportsdb.com/api/v1/json/3/searchplayers.php?p='+name)
            .then((res)=>{
                console.log(res.data.player[0])
                this.jugadorData = res.data.player[0]
            })
            .catch((err)=>{
                console.log(err);
            })
        }
    }
</script>

<style>
img{
    width: 40%;
    height: 40%;
    border-radius: 10%;
}
</style>