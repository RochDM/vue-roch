<template>
    <div class="col-3 mb-3">
        <div class="bg-white p-3 rounded-5">
            <img :src="equipos.strTeamBadge" class="img-card">
            <label class="fs-3 fw-bold">{{ equipos.strTeam }}</label>            
        </div>
    </div>
</template>

<script>
    export default{
        props:["equipos"],
        methods:{
            listaEquipos(){
                console.log(this.equipos.idTeam)
                this.$router.push("/equipos/"+ this.equipos.idTeam)
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