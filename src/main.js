import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Login_ch from './components/Login_ch.vue'
import {createRouter,createWebHistory} from "vue-router"
import register_ch from "./components/Register_ch.vue"
let routes = [{path:"/ch/login",component:Login_ch},{path:"/ch/register",component:register_ch}];
let router = createRouter({
    routes:routes,
    history:createWebHistory()
});
createApp(App).use(router).mount('#app')
