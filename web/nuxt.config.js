import pkg from './package'

export default {
  ssr: 'false',
  target: 'static',

  /*
   ** Headers of the page
   */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },

  /*
   ** Global CSS
   */
  css: [
    '@/assets/scss/main.scss',
    '@fortawesome/fontawesome-svg-core/styles.css'
  ],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~/plugins/fontawesome.js'],

  /*
   ** Nuxt.js modules
   */
  modules: [],
  buildModules: ['@nuxtjs/tailwindcss'],

  styleResources: {
    scss: ['./assets/scss/*.scss']
  },
  /*
   ** Generate dynamic routes from data from sanity.
   ** Used only for generating static served HTML files
   */

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
