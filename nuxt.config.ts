import {apiPlugin} from "@storyblok/vue"

export default defineNuxtConfig({
    ssr: false,

    nitro: {
        compressPublicAssets: true,
    },

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
                start_url: '/',
                useWebmanifestExtension: false,
            }

        }],
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
    }
})
