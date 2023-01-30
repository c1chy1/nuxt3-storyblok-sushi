import type { Config } from "tailwindcss";
import tailwindTypography from "@tailwindcss/typography";
import tailwindAspectRatio from "@tailwindcss/aspect-ratio";
import defaultTheme from "tailwindcss/defaultTheme";

export default <Partial<Config>>{
    theme: {
        extend: {
            aspectRatio: {
                auto: 'auto',
                square: '1 / 1',
                video: '16 / 9',
                1: '1',
                2: '2',
                3: '3',
                4: '4',
                5: '5',
                6: '6',
                7: '7',
                8: '8',
                9: '9',
                10: '10',
                11: '11',
                12: '12',
                13: '13',
                14: '14',
                15: '15',
                16: '16',
            },
            fontFamily: {
                sans: ["'Open Sans'", ...defaultTheme.fontFamily.sans],
                mono: ["'Fira Code'", ...defaultTheme.fontFamily.mono],
                display: ["'Dosis'", 'display'],
            },

            colors: {
                'jobs-blue': {
                    DEFAULT: '#0014AA',
                    shade: '#001285',
                    contrast: '#FFFFFF',
                },
                'jobs-cyan': {
                    DEFAULT: '#5CEBDE',
                    shade: '#53d4c8',
                    contrast: '#4A4A4A',
                },
                'jobs-yellow': {
                    DEFAULT: '#FFFF64',
                    shade: '#e6e65a',
                    contrast: '#4A4A4A',
                },

                'shrimp': {
                    DEFAULT: '#FB8D4B',
                    '50': '#FFFFFF',
                    '100': '#FFF2EB',
                    '200': '#FED9C3',
                    '300': '#FDC09B',
                    '400': '#FCA673',
                    '500': '#FB8D4B',
                    '600': '#FA6A14',
                    '700': '#D15105',
                    '800': '#9A3C03',
                    '900': '#632702',
                },
            }
        },
    },
    content: [
        "./components/**/*.{vue,js}",
        "./pages/**/*.vue",
        "./nuxt.config.{js,ts}",
        "./storyblok/**/*.{vue,js}"
    ],


    plugins: [tailwindTypography,   require('@tailwindcss/aspect-ratio')]
};
