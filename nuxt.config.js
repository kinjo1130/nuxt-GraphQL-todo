import colors from 'vuetify/es5/util/colors'

export default {
<<<<<<< HEAD
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: true,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - nuxt-amplify',
    title: 'nuxt-amplify',
    htmlAttrs: {
      lang: 'en',
=======
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - nuxt-amplify-1',
    title: 'nuxt-amplify-1',
    htmlAttrs: {
      lang: 'en'
>>>>>>> refs/remotes/origin/main
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
<<<<<<< HEAD
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: '~/plugins/amplify.js', ssr: true }],
=======
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],
>>>>>>> refs/remotes/origin/main

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
<<<<<<< HEAD
    treeShake: true,
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: '#54C3CA',
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
        light: {
          primary: '#54C3CA',
=======
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
>>>>>>> refs/remotes/origin/main
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
<<<<<<< HEAD
          success: colors.green.accent3,
        },
      },
    },
=======
          success: colors.green.accent3
        }
      }
    }
>>>>>>> refs/remotes/origin/main
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
<<<<<<< HEAD
    /*
     ** You can extend webpack config here
     */
  },
=======
  }
>>>>>>> refs/remotes/origin/main
}
