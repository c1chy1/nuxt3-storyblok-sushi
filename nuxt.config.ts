import {apiPlugin} from "@storyblok/vue"

const OPEN_GRAPH = [
    {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: 'c1chy.Sushi',
    },
    {
        hid: 'og:title',
        property: 'og:title',
        content: 'c1chy.Sushi',
    },
    {
        hid: 'og:type',
        property: 'og:type',
        content: 'website',
    },

    { name: "robots", content: "max-image-preview:large" },
    {
        hid: 'og:description',
        name: 'og:description',
        content: 'Sushi App',
    },
    {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://c1chy-sushi.netlify.app/',
    },
    {
        hid: "og:image",
        property: "og:image",
        content: "https://www.web300421.roc130.rockinghoster.cloud/c1chy.sushi.png"
    },

    {
        hid: "og:image:secure_url",
        property: "og:image:secure_url",
        content: "https://www.web300421.roc130.rockinghoster.cloud/c1chy.sushi.png"
    },
    {property: 'og:updated_time', content: new Date().toISOString()},
]

const TWITTER = [

    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:site', content: 'website' },

    {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: 'c1chy.Sushi',
    },
    {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: 'Sushi App',
    },

    {
        hid: "twitter:image",
        name: "twitter:image",
        content: "https://www.web300421.roc130.rockinghoster.cloud/c1chy.sushi.png"
    },
    {
        hid: 'twitter:image:alt',
        name: 'twitter:image:alt',
        content: 'c1chy.Sushi Preview',
    },

    {
        hid: "og:image:width",
        name: "og:image:width",
        content: 600
    },
    {
        hid: 'og:image:height',
        name: 'og:image:height',
        content: 200
    },

]


export default defineNuxtConfig({
    ssr: false,

    app: {
        pageTransition: {name: 'slide', mode: 'out-in'},
        head: {
            bodyAttrs: {
                class: 'overflow-x-hidden'
            },

            title: 'c1chy.Sushi',
            meta: [
                ...OPEN_GRAPH,
                ...TWITTER,
            ],

        }
    },

    nitro: {
        compressPublicAssets: true,
    },

    css: ['~/assets/css/tailwind.scss'],
    build: {
        transpile: ['@marvr/storyblok-rich-text-vue-renderer', 'gsap'],
    },
    image: {

        provider: 'netlify',
        screens: { xs: 320, sm: 640, md: 768, lg: 1024, xl: 1280, xxl: 1536, '2xl': 1536 },

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

            baseURL: "/",

            workbox: {
                enabled: true,

            },
            icon: {
                maskablePadding: 0,
            },
            manifest: {
                name:'c1chy.Sushi',
                ogImage: 'https://www.web300421.roc130.rockinghoster.cloud/c1chy.sushi.png',
                display: 'standalone',
                theme_color: "#D15105",
                background_color: "#FB8D4B",
                useWebmanifestExtension: true,
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
        noPrefixDefaultLocale: true,
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
            chunkSizeWarningLimit: 1024
        }
    }


})
