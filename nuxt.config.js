export default {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      // { name: 'theme-colo', content: '#4DBA87' },
      // { name: 'description', content: 'task' },
      // { name: 'apple-mobile-web-app-capable', content: 'yes' },
      // { name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
      // { name: 'apple-mobile-web-app-title', content: 'task' },
      // { name: 'msapplication-TileColor', content: '#000000' },
      // { name: 'msapplication-TileImage', content: '/msapplication-icon-144x144.png' },
      {hid: 'description', name: 'description', content: process.env.npm_package_description || ''}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
      // { rel: 'manifest', type: '', href: '/manifest.json' },
      // { rel: 'apple-touch-icon', type: '', href: ' /apple-touch-icon-152x152.png' },
      // { rel: 'mask-icon', type: '', href: '/safari-pinned-tab.svg' },
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: {color: 'blue'},
  /*
  ** Global CSS
  */
  css: [
    '@/node_modules/bootstrap/dist/css/bootstrap.min.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    {src: '~/plugins/vuelidate.js'},
    {
      src: '~/plugins/sw1.js',
      ssr: false
    }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
  ],
  manifest: {
    name: 'text',
    short_name: 'text',
    lang: 'en',
    display: 'standalone',
    icons: [
      {"src": "/android-chrome-192x192.png", "sizes": "192x192", "type": "image/png"}],
    crossorigin: 'use-credentials',
  },

  workbox: {
    importScripts: [
      'custom-sw.js'
    ],
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
