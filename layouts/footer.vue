<template>
    <footer class="footer-component">
        <nav class="footer-navigation">
            <ul class="footer-logo">
                <li>
                    <NuxtLink to="/">audiophile</NuxtLink>
                </li>
            </ul>
            <ul class="footer-nav">
                <li>
                    <NuxtLink to="/">Inicio</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/">Auriculares</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/">Altavoces</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/">In-ear</NuxtLink>
                </li>

            </ul>
        </nav>
    </footer>
    <slot />

</template>
<script setup>
import "@/assets/css/components/footer.css"
</script>