import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createWebHistory, createRouter } from 'vue-router'
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from "./components/Home.vue"
import JugadoresDetails from "./components/JugadoresDetails.vue"

const routes=[
    {
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/jugador/:name",
        name: "Jugadores",
        component: JugadoresDetails
    },
]

const router = createRouter({
    history:createWebHistory(),
    routes
})
export default router

createApp(App).use(router).mount('#app')
