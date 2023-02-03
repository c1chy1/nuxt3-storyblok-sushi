// https://nuxt.com/docs/api/configuration/nuxt-config


export default defineNuxtConfig({
    ssr: false,
    css: ["~/assets/css/tailwind.css"],
    build: {
        transpile: ['@marvr/storyblok-rich-text-vue-renderer'],
    },

    modules:[ ['@storyblok/nuxt',
        { accessToken: process.env.STORYBLOK_API_TOKEN,
            bridge: true,
        }] ,
        '@nuxtjs/tailwindcss',
        '@nuxtjs/i18n'
    ],

  /*  i18n: {
        strategy: 'prefix_except_default',
        locales: ['en', 'de'],
        defaultLocale: 'en', // default locale
    },
    generate: {
        routes: ['/de']
    }*/

})

