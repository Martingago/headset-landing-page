<template>
  <div>
    <navVue></navVue>
    <slot />
  </div>
</template>

<script setup>
import navVue from '~~/components/nav.vue';
</script>