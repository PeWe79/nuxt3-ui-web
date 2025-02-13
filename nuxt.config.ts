// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  app: {
    head: {
      link: [
        { rel: 'icon', href: '/favicon.ico' },
        // { rel: "preconnect", href: "https://rsms.me/" },
        // { rel: "stylesheet", href: "https://rsms.me/inter/inter.css" },
        // { rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" },
      ],
      htmlAttrs: {
        lang: 'en',
        class: 'scroll-smooth',
      },
    },
    pageTransition: { name: 'page', mode: 'out-in' },
  },
  css: ['~/assets/css/main.css'],
  devtools: { enabled: true },
  modules: [
    '@nuxt/ui',
    '@nuxt/content',
    '@nuxt/image',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    ['@pinia/nuxt', { autoImports: 'defineStore' }],
    'nuxt-easy-lightbox',
    'pinia-plugin-persistedstate',
  ],
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
  },
  icon: {
    serverBundle: 'local',
    clientBundle: {
      scan: true,
      // include all custom collections in the client bundle
      includeCustomCollections: true,
      // guard for uncompressed bundle size, will fail the build if exceeds
      sizeLimitKb: 256,
    },
  },
  content: {
    highlight: {
      // Code Theme used in all color schemes.
      theme: 'one-dark-pro',
    },
  },
  colorMode: {
    classSuffix: '',
    preference: 'dark',
    fallback: 'dark',
    storageKey: 'color-mode',
  },
  compatibilityDate: '2024-12-30',
})
