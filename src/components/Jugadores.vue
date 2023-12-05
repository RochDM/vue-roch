<template>
    <div class="col-3">
        <div @click="jugadorDetalles" class="bg-white rounded-5 p-3 mb-2">
            <img :src="jugadores.strThumb" class="img-card">
            <p>{{ jugadores.strPlayer }}</p>
        </div>
    </div>
</template>

<script>
    export default{
        props:["jugadores"],
        methods:{
            jugadorDetalles(){
                console.log(this.jugadores.strPlayer);
                this.$router.push("/jugador/" + this.jugadores.strPlayer)
            }
        }
    }
</script>

<style>
    .img-card{
        width: 80%;
        height: 80%;
    }
</style>