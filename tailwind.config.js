const defaultTheme = require('tailwindcss/defaultTheme')
import tailwindAspectRatio from "@tailwindcss/aspect-ratio";
import tailwindTypography from "@tailwindcss/typography"

module.exports = {
  content: ['storyblok/**/*.{vue,js}', 'components/**/*.{vue,js}', 'pages/**/*.vue'],

  theme: {


    extend: {


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
  plugins: [ tailwindAspectRatio , require('@tailwindcss/typography')],

}
