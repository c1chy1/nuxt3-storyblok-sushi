module.exports = {
  content: ['storyblok/**/*.{vue,js}', 'components/**/*.{vue,js}', 'pages/**/*.vue'],

  theme: {
    extend: {
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
      }

    },

  },
  plugins: [],
}
