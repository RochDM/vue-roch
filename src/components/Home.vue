<template>
    <h1>Encuentra a tu Deportista favorito</h1>
    <input type="text" placeholder=" Buscar Deportista"
    v-model="search" v-on:keyup.enter="searchData" class="mb-5">

    <section class="container">
        <article class="row">
            <Jugadores v-for="j in jugadors" :key="j.idPlayer" :jugadores="j"/>
        </article>
    </section>

    <h1>Equipos</h1>

    <section class="container">
        <article class="row">
            <Equipos v-for="equipos in paginated"
            :key="equipos.idTeam" :equipos="equipos"/>
        </article>
    </section>

</template>

<script>
    import Equipos from './Equipos.vue'
    import axios from 'axios'
    import Jugadores from './Jugadores.vue'

    export default{
        name: 'App',
        data(){
            return{
                equipos: [],
                cPage: 1,
                pSize: 4,
                search: '',
                jugadors: []
            }
        },
        mounted(){
            axios.get('https://thesportsdb.com/api/v1/json/3/search_all_teams.php?l=English%20Premier%20League')
            .then((res)=>{
                console.log(res.data);
                this.equipos = res.data.teams;
            })
            .catch((err)=>{
                console.log(err)
            })
        },
        components:{
            Equipos,
            Jugadores
        },
        computed:{
            indexStart(){
                return (this.cPage-1)*this.pSize
            },
            indexEnd(){
                return this.indexStart + this.pSize
            },
            paginated(){
                return this.equipos.slice(this.indexStart, this.indexEnd)
            }
        },
        methods:{
            prev(){
                this.current--
            },
            next(){
                this.current++
            },
            searchData(){
                if(this.search){
                    axios.get('https://thesportsdb.com/api/v1/json/3/searchplayers.php?p='+this.search)
                    .then((respon)=>{
                        console.log(respon.data.player)
                        this.jugadors = respon.data.player
                    })
                }else{

                }
            }
        }
    }
</script>