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

       head: {

           bodyAttrs: {
               class: 'overflow-x-hidden'
           },
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
