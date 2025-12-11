import { defineNuxtConfig } from "nuxt/config";
import svgLoader from 'vite-svg-loader';


// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      apiUrl: process.env.API_URL || '<https://6082e3545dbd2c001757abf5.mockapi.io>',
    },
  },
  
  css: [
    '~/assets/styles/main.scss'
  ],
   vite: {
    plugins: [
      svgLoader({
        defaultImport: 'component' // ← важно!
      })
    ]
  },
  app: {
    head: {
      title: 'QTIM Blog',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Современный блог на Nuxt.js' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  }
})
