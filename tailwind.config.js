module.exports = {
  content: [
    './public/index.html',
    './src/**/*.{html,svelte,js,ts}'
  ],
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}
