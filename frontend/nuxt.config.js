var envPath = require('find-config')('.env', { module: true });

require('dotenv').config({ path: envPath });

console.log('-----------------------------------------------------------------');
console.log(`Loading from ${envPath}:`)
console.log(` IMAGE_BASE_URI: ${process.env.IMAGE_BASE_URI}`)
console.log(` STRAPI_BASE_URL: ${process.env.STRAPI_BASE_URL}`)
console.log(` NOTE: STRAPI_BASE_URL will default to http://localhost:1337 if not specified.`)
console.log('-----------------------------------------------------------------');

module.exports = {
  mode: 'universal',
  env: {
    IMAGE_BASE_URI: process.env.IMAGE_BASE_URI || ''
  },
  /*
  ** Headers of the page
  */
  head: {
    title: "{{{title}}}",
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
      { hid: 'og:title', name: 'og:title', content: "{{{title}}}" },
      { hid: 'og:image', name: 'og:image', content: 'https://cdn.britannica.com/84/73184-004-E5A450B5/Sunflower-field-Fargo-North-Dakota.jpg' },
      { hid: 'og:image', name: 'og:description', content: process.env.SITE_TITLE },
      { hid: 'og:image', name: 'og:url', content: 'https://www.' + process.env.SITE_DOMAIN },
    ],
    script: [
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ]
  },
  link: [
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Staatliches' }
  ],
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '@assets/css/main.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/modules/tree/master/packages/bulma
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    '@nuxtjs/apollo'
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  apollo: {  
    clientConfigs: {
      default: {
        // NOTE: STRAPI_BASE_URL comes from the docker build NOT from the .env file!!!
        httpEndpoint: process.env.STRAPI_BASE_URL ? process.env.STRAPI_BASE_URL + '/graphql' : "http://localhost:1337/graphql"
      }
    }
  },
  /*
  ** Build configuration
  */
  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    },
    /*
    ** You can extend webpack config here
    */
    extend (config) {
      config.devtool = '#source-map'
    }
  },
}
