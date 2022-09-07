<template>
    <div class="container-navigation">
        <nav class="navigation-page">
            <button class="btn-menu" @click="toggleMenu = !toggleMenu">
                        <font-awesome-icon icon="fa-solid fa-bars" />
            </button>
            <ul class="logo-button">
                <li>
                    <NuxtLink to="/"><h2>audiophile</h2></NuxtLink>
                </li>
            </ul>
            
                <ul class="nav-buttons" v-bind:class="{hiddenMenu: toggleMenu}">
                    <li>
                        <NuxtLink @click="cerrarMenu" to="/about">Inicio</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink @click="cerrarMenu" to="/">Auriculares</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink :to="{path: '/', hash: '#speaker'}">Altavoces</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink @click="cerrarMenu" to="/">In-Ear</NuxtLink>
                    </li>
                </ul>
            
            <ul class="chart-button">
                <li>
                    <NuxtLink to="/"> <font-awesome-icon icon="fa-solid fa-cart-shopping" /></NuxtLink>
                </li>
            </ul>
        </nav>
    </div>
</template>
<script setup>
import "@/assets/css/components/nav.css";
import { ref} from "vue";

const toggleMenu = ref(true)



const cerrarMenu = () => {
    if(document.documentElement.scrollWidth < 1080){
        mostrar.value = !mostrar
    }
}



</script>