<template>
    <div class="container-navigation">
        <nav class="navigation-page">
            <button class="btn-menu">
                        <font-awesome-icon icon="fa-solid fa-bars" />
            </button>
            <ul class="logo-button">
                <li>
                    <NuxtLink to="/"><h2>audiophile</h2></NuxtLink>
                </li>
            </ul>
            <ul class="nav-buttons">
                <li>
                    <NuxtLink to="/about">Inicio</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/">Auriculares</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/">Altavoces</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/">In-Ear</NuxtLink>
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
import "@/assets/css/components/nav.css"
</script>