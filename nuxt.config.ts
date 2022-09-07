import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config

export default defineNuxtConfig({
  modules: [
    '@pinia/nuxt',
  ],
  
  build: {
    transpile: ['@fortawesome']
  },
    css: [
      '@fortawesome/fontawesome-svg-core/styles.css'
    ],
    
  })
  

