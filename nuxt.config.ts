// https://nuxt.com/docs/api/configuration/nuxt-config


import { apiPlugin } from '@storyblok/vue'



export default defineNuxtConfig({

    css: ["~/assets/css/tailwind.css"],
    modules:[ ['@storyblok/nuxt',
        { accessToken: process.env.STORYBLOK_API_TOKEN,
            bridge: true,
             use: [apiPlugin]
        }] ,


        '@nuxtjs/tailwindcss' ,'@nuxt/image-edge' ],

})
