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


        '@nuxtjs/tailwindcss'],

})

