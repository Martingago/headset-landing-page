<template>
  <div class="audiophile-page-content">
    <headsetVue></headsetVue>
    <carrouselProductVue></carrouselProductVue>
    <speakerVue></speakerVue>
    <bannerProductVue></bannerProductVue>
    <hearphonesVue></hearphonesVue>
    <callToActionVue></callToActionVue>
  </div>
  
</template>

<script setup>

  import headsetVue from '@/components/product/headset.vue';
  import speakerVue from '@/components/product/speaker.vue';
  import carrouselProductVue from '@/components/carrousel-product.vue';
  import bannerProductVue from '~~/components/product/banner-product.vue';
  import hearphonesVue from '@/components/product/hearphones.vue';
  import callToActionVue from '~~/components/call-to-action.vue';
</script>

<style scoped>
  .audiophile-page-content{
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  @media screen and (max-width:1080px){
    .audiophile-page-content{
      gap: 6rem;
    }
  }
  @media screen and (max-width: 768px) {
    .audiophile-page-content{
      gap: 5rem;
    }
  }
</style>