import {apiPlugin} from "@storyblok/vue"




export default defineNuxtConfig({
    ssr: false,

    nitro: {
        compressPublicAssets: true,
    },

    css: ['~/assets/css/tailwind.scss'],
    build: {
        transpile: ['@marvr/storyblok-rich-text-vue-renderer','gsap'],
    },
    image: {
        storyblok: {
            baseURL: 'https://a.storyblok.com',
        },
    },


    app: {

        pageTransition: { name: 'slide' , mode:'out-in'},





  /*     head: {


/!*
           meta: [

               {
                   hid: 'description',
                   name: 'c1chy Sushi description',
                   content: "test",
               },
               // og
               {
                   hid: 'og:description',
                   property: 'og:description',
                   content: "c1chy Sushi description",
               },
               {
                   hid: 'og:title',
                   property: 'og:title',
                   content: `c1chy Sushi title`,
               },
               {
                   hid: 'og:type',
                   property: 'og:type',
                   content: 'article',
               },
               {
                   hid: 'og:url',
                   property: 'og:url',
                   content: `https://c1chy-sushi.netlify.app/home/`,
               },
               {
                   hid: 'og:image',
                   property: 'og:image',
                   content: "https://res.cloudinary.com/alvarosaburido/image/upload/v1671362003/OG_zpg7nx.png",
               },
               {
                   hid: 'og:image:alt',
                   property: 'og:image:alt',
                   content: "alt image c1chy sushi",
               },

               // Twitter
               { name: 'twitter:card', content: 'summary_large_image' },
               { name: 'twitter:site', content: '@c1chy' },
               {
                   hid: 'twitter:title',
                   property: 'twitter:title',
                   content: `Twitter title`,
               },
               {
                   hid: 'twitter:description',
                   name: 'twitter:description',
                   content: "Twitter description",
               },
               {
                   hid: 'twitter:image',
                   name: 'twitter:image',
                   content: "https://res.cloudinary.com/alvarosaburido/image/upload/v1671362003/OG_zpg7nx.png",
               },
               {
                   hid: 'twitter:image:alt',
                   name: 'twitter:image:alt',
                   content: "Twitter alt",
               },
           ],*!/

           bodyAttrs: {
               class: 'overflow-x-hidden'
           }
       }*/

    },

    modules: [['@storyblok/nuxt',
        {
            accessToken: process.env.STORYBLOK_API_TOKEN,
            bridge: true,
            use: [apiPlugin]
        }],
 /*       ['@kevinmarrec/nuxt-pwa', {

        baseURL: "/home",

            workbox: {
                enabled: true,

            },
            icon: {
                maskablePadding: 0,
            },
            manifest: {
                name: 'c1chy sushi',
                display: 'standalone',
                theme_color: "#D15105",
                background_color: "#FB8D4B",
                start_url: '/home',
                useWebmanifestExtension: true,
            }
        }],*/
        '@nuxtjs/color-mode',
        'nuxt-icon',
        '@pinia/nuxt',
        '@nuxtjs/i18n',
        '@nuxt/image-edge',
        '@nuxtjs/tailwindcss',
        '@averjs/nuxt-compression',
        '@nuxtjs/fontaine',
        '@nuxtjs/critters'],

    i18n: {
        strategy: 'prefix_except_default',
        locales: ['en', 'de', 'pl'],
        defaultLocale: 'en', // default locale
    },

    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },


    colorMode: {
        preference: 'system', // default value of $colorMode.preference
        fallback: 'light', // fallback value if not system preference found
        hid: 'nuxt-color-mode-script',
        globalName: '__NUXT_COLOR_MODE__',
        componentName: 'ColorScheme',
        classPrefix: '',
        classSuffix: '', // remove -mode suffix for Tailwind Dark mode support
        storageKey: 'nuxt-color-mode'
    },

    compression: {
        viteCompression: {
            algorithm: 'gzip',
            threshold: 513
        }
    },

    vite: {
        build: {
            chunkSizeWarningLimit: 1024,
            manifest: false,
    }}


})
