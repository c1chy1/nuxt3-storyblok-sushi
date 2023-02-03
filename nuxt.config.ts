import {apiPlugin} from "@storyblok/vue"

export default defineNuxtConfig({
    ssr: false,
    css: ["~/assets/css/tailwind.css"],
    build: {
        transpile: ['@marvr/storyblok-rich-text-vue-renderer'],
    },
    image: {
        storyblok: {
            baseURL: 'https://a.storyblok.com',
        },
    },
    modules: [['@storyblok/nuxt',
        {
            accessToken: process.env.STORYBLOK_API_TOKEN,
            bridge: true,
            use: [apiPlugin]
        }],

        '@nuxtjs/i18n',
        '@nuxt/image-edge',
        '@nuxtjs/tailwindcss',
        '@nuxtjs/fontaine',
        '@nuxtjs/critters'],

      i18n: {
        strategy: 'prefix_except_default',
        locales: ['en', 'de'],
        defaultLocale: 'en', // default locale
    },
    generate: {
        routes: ['/de']
    }
})
