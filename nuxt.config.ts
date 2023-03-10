// import { defineNuxtConfig } from 'nuxt'
import presetWebFonts from '@unocss/preset-web-fonts'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  typescript: {
    shim: false
  },
  modules: [
    '@nuxt/content',
    // '@nuxtjs/tailwindcss',
    '@unocss/nuxt',
    '@unocss/preset-web-fonts',
    '@nuxtjs/color-mode',
    '@vueuse/nuxt',
  ],
  target: 'static',
  // Allows page refresh to work on github pages
  generate: {
    fallback: "404.html"
  },
  // router: {
  //   base: '/quartzar.github.io/'
  // },
  // https://github.com/nuxt-community/google-fonts-module
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    // "@nuxtjs/tailwindcss",
    // Doc: https://github.com/unocss/unocss
    '@unocss/nuxt',
    // '@nuxtjs/postcss',
    // Simple usage
    // '@nuxtjs/google-fonts',
    // With options
    // ['@nuxtjs/google-fonts', { /* module options */ }]
  ],
  // Doc: https://github.com/unocss/unocss/tree/main/packages/nuxt
  unocss: {
    preflight: true,
    // presets
    uno: true, // enabled `@unocss/preset-uno`
    icons: true, // enabled `@unocss/preset-icons`
    attributify: true, // enabled `@unocss/preset-attributify`,
    typography: true, // enabled '@unocss/preset-typography'
    // webFonts: true, // enabled '@unocss/preset-web-fonts'
    webFonts: {
      provider: 'google', // default provider
      fonts: {
        // these will extend the default theme
        sans: 'Poppins',
        serif: 'Recursive',
        mono: ['Fira Code', 'Fira Mono:400,700'],
        // custom ones
        lobster: 'Lobster',
        lato: [
          {
            name: 'Lato',
            weights: ['400', '700'],
            italic: true,
          },
          {
            name: 'sans-serif',
            provider: 'none',
          },
        ],
      },
    },
    autoImport: true, // enabled importing tailwind.css
    // transformerDirectives: true, // enabled '@unocss/transformer-directives'
 
    // core options
    shortcuts: [],
    rules: [],
  },
  // https://tailwindcss.nuxtjs.org/examples/tailwindui
  // googleFonts: {
  //   families: {
  //     Poppins: true,
  //     Recursive: true,
  //   }
  // },

  // tailwindcss: {
  //   jit: true
  // },

  // https://color-mode.nuxtjs.org
  colorMode: {
    classSuffix: ''
  },

  // https://content.nuxtjs.org
  content: {
    navigation: {
      fields: ['navTitle']
    },
    highlight: {
      // See the available themes on https://github.com/shikijs/shiki/blob/main/docs/themes.md#all-theme
      theme: 'material-default'
    }
  },
  head: {
    link: [
      // { rel: 'icon', type: 'image/gif', href: '~/public/animated_favigon.gif'},
      { rel: 'icon', type: 'image/x-icon', href: '~/public/favicon.ico' }
    ]
  },
})
