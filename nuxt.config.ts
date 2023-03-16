import {apiPlugin} from "@storyblok/vue"



const OPEN_GRAPH = [
    {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: 'c1chy sushi',
    },
    {
        hid: 'og:description',
        property: 'og:description',
        content: 'c1chy sushi is sushi recipe app built with Nuxt 3, Storyblok, and Unocss',
    },
    {
        hid: 'og:title',
        property: 'og:title',
        content: 'c1chy.Sushi',
    },
    {
        hid: 'og:url',
        property: 'og:url',
        content: 'c1chy-sushi.netlify.app/',
    },
    {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://res.cloudinary.com/alvarosaburido/image/upload/v1671362003/OG_zpg7nx.png',
    },
    { property: 'og:updated_time', content: new Date().toISOString() },
]

const TWITTER = [
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:site', content: '@c1chysushi' },
    {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: 'c1chy sushi',
    },
    {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: 'c1chy.Sushi is sushi recipe app built with Nuxt 3, Storyblok, and Unocss',
    },
    {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: 'https://res.cloudinary.com/alvarosaburido/image/upload/v1671362003/OG_zpg7nx.png',
    },
    {
        hid: 'twitter:image:alt',
        name: 'twitter:image:alt',
        content: 'c1chy.Sushi Preview',
    },
]


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

       head: {

            title: 'c1chy.sushi',

           meta: [
               {
                   hid: 'description',
                   name: 'description',
                   content: 'Sushi Wuut is sushi recipe app built with Nuxt 3, Storyblok, and Unocss',
               },
               { hid: 'author', name: 'author', content: 'Alvaro Saburido' },
               {
                   hid: 'keywords',
                   property: 'keywords',
                   keywords: 'sushi, recipes, nuxt, storyblok, unocss',
               },
               ...OPEN_GRAPH,
               ...TWITTER,
           ],



           bodyAttrs: {
               class: 'overflow-x-hidden'
           }
       }

    },

    modules: [['@storyblok/nuxt',
        {
            accessToken: process.env.STORYBLOK_API_TOKEN,
            bridge: true,
            use: [apiPlugin]
        }],
        ['@kevinmarrec/nuxt-pwa', {


        baseURL: "/home",
            workbox: {
                enabled: true,

            },
            icon: {
                maskablePadding: 0,
            },

            manifest: {
                name: 'c1chy sushi',
                lang: 'en',
                display: 'standalone',
                description: "sushi recipes",
                theme_color: "#D15105",
                background_color: "#FB8D4B",
                start_url: '/home',
                useWebmanifestExtension: false,
            }

        }],
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
            rollupOptions: {
                output: {
                    manualChunks: {
                    }
                }
            },
            ssr: false
        },
    },


})
