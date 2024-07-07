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
        'xs': {'max': '500px'}, // extra small
        'sm': {'min': '501px', 'max': '900px'}, // small
        'lg': {'min': '901px'}, // large
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}
