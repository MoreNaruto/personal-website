module.exports = {
  content: [
    './public/index.html',
    './src/**/*.{html,svelte,js,ts}'
  ],
  theme: {
    extend: {
      backgroundColor: {
        'thoughtworks': '#013B4D',
        'allstate': '#101640',
        'activecampaign': '#004AF6',
        'rallyHealth': '#EB6833',
        'clearstep': '#322193',
        'improovy': '#01BBF6',
        'makalogistics': '#25334B',
        'discover': '#E47619'
      },
      minHeight: {
        'full-available': '-webkit-fill-available',
      },
      screens: {
        'xs': {'max': '640px'},
        'sm': {'min': '641px', 'max': '900px'},
        'lg': {'min': '901px', 'max': '1280px'},
        'xl': {'min': '1281px'},
      },
      translate: {
        '1/2-40vw': 'calc(40vw / 2)',
        '1/2-35vw': 'calc(35vw / 2)',
        '1/2-30vw': 'calc(30vw / 2)',
        '1/2-18vw': 'calc(18vw / 2)',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    function({ addUtilities }) {
      const newUtilities = {
        '.translate-z-40vw': {
          transform: 'translateZ(calc(40vw / 2))'
        },
        '.translate-z-35vw': {
          transform: 'translateZ(calc(35vw / 2))'
        },
        '.translate-z-30vw': {
          transform: 'translateZ(calc(30vw / 2))'
        },
        '.translate-z-18vw': {
          transform: 'translateZ(calc(18vw / 2))'
        }
      }
      addUtilities(newUtilities, ['responsive'])
    }
  ],
}
