<template>
  <div>
    <NuxtLayout :name="layout">
      <NuxtPage/>
      <NuxtLayout :name="footer">
      </NuxtLayout>
    </NuxtLayout>
  </div>
</template>


<script setup>
import "@/assets/css/reset.css";
import "@/assets/css/app.css"
const layout = "default"
const footer = "footer"


  useHead({
    titleTemplate: (titleChunk) => {
      return titleChunk ? `${titleChunk} - Site Title` : 'Web martin';
    }
  })
</script>
