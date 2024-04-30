// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  nitro: {
    prerender: {
      routes: ['/sitemap.xml']
    }
  },

  nuxtNotifications: {},

  modules: ["@nuxt/image", '@nuxtjs/sitemap'],
})
