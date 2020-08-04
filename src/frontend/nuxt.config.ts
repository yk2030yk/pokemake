import { Configuration } from '@nuxt/types'

const config: Configuration = {
  mode: 'spa',

  buildModules: ['@nuxt/typescript-build', '@nuxtjs/vuetify'],

  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  loading: {
    color: '#fff'
  },

  css: ['@/assets/scss/global.scss'],

  plugins: [
    '@/plugins/composition-api',
    '@/plugins/axios-accessor',
    '@/plugins/vue-simple-suggest',
    '@/plugins/register-common-components'
  ],

  modules: ['@nuxtjs/style-resources', '@nuxtjs/axios', '@nuxtjs/proxy'],

  styleResources: {
    scss: ['./assets/scss/global/_variable.scss']
  },

  axios: {
    baseURL: process.env.API_BASE_URL || 'http://localhost:8003/api',
    proxyHeaders: false,
    credentials: false
  },

  watchers: {
    webpack: {
      poll: true
    }
  },

  build: {}
}

export default config
