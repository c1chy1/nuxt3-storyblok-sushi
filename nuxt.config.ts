import {apiPlugin} from "@storyblok/vue"

const OPEN_GRAPH = [
    {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: 'Sushi Wuut',
    },
    {
        hid: 'og:description',
        property: 'og:description',
        content: 'Sushi Wuut is sushi recipe app built with Nuxt 3, Storyblok, and Unocss',
    },
    {
        hid: 'og:title',
        property: 'og:title',
        content: 'Sushi Wuut',
    },
    {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://c1chy-sushi.netlify.app/',
    },
    {
        hid: "og:image",
        property: "og:image",
        content: "https://www.web300421.roc130.rockinghoster.cloud/sushi-hero-380x199.png"    },

{
        hid: "og:image:secure_url",
        property: "og:image:secure_url" ,
        content: "https://www.web300421.roc130.rockinghoster.cloud/sushi-hero-380x199.png"
},
    { property: 'og:updated_time', content: new Date().toISOString() },
]

const TWITTER = [

    {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: 'Sushi Wuut',
    },
    {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: 'Sushi Wuut is sushi recipe app built with Nuxt 3, Storyblok, and Unocss',
    },
    {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: 'https://res.cloudinary.com/alvarosaburido/image/upload/v1671362003/OG_zpg7nx.png',
    },
    {
        hid: 'twitter:image:alt',
        name: 'twitter:image:alt',
        content: 'Sushi Wuut Preview',
    },
]


export default defineNuxtConfig({
    ssr: false,

    app: {
        pageTransition: { name: 'slide' , mode:'out-in'},
        head: {
            bodyAttrs: {
                     class: 'overflow-x-hidden'
                 },

            meta : [
                ...OPEN_GRAPH,
                ...TWITTER,
            ],

            manifest: {
                lang: 'en',
                name: `PB Portfolio`,
            },
        }
    },

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
    /*        manifest: {


                ogTitle: 'c1chy.Sushi',
                ogHost: 'https://res.cloudinary.com/alvarosaburido/image/upload/v1671362003/OG_zpg7nx.png',
                name: 'c1chy sushi',
                display: 'standalone',
                theme_color: "#D15105",
                background_color: "#FB8D4B",
                useWebmanifestExtension: true,
            }*/
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
        locales: [

            {
                code: 'en',
                iso: 'en-US',
                name: 'English',
            },
            {
                code: 'de',
                iso: 'de-GE',
                name: 'Germany',
            },

            {
                code: 'pl',
                iso: 'pl-pl',
                name: 'Polish',
            },],
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
    }}


})
