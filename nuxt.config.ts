import type { NuxtConfig } from '@nuxt/types'

const config: NuxtConfig = {
  target: 'static',
  rootDir: __dirname,
  components: [
    {
      path: '~/components',
      extensions: ['vue'],
      pathPrefix: false
    }
  ],
  head: {
    titleTemplate: '%s - SteemPanel',
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'SteemPanel is a free blockchain tool which calculate the approximate value of an upvote calculator on Steem, Steem power, transactions, SBD value and account information.',
      },
      { name: 'format-detection', content: 'telephone=no' },
      { hid: 'og:site_name', property: 'og:site_name', content: 'SteemPanel' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'twitter:site', name: 'twitter:site', content: '@steempanel' },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: `${process.env.websiteURL}/social_image.png`,
      },
      {
        hid: 'og:image:secure_url',
        property: 'og:image:secure_url',
        content: `${process.env.websiteURL}/social_image.png`,
      },
      {
        hid: 'og:image:alt',
        property: 'og:image:alt',
        content: 'Nuxt',
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: `${process.env.websiteURL}/social_image.png`,
      },
    ],
  },
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/stylelint-module',
    '@nuxtjs/tailwindcss',
    'nuxt-storm',
    '@nuxtjs/pwa',
  ],
  modules: ['@nuxtjs/axios'],
  axios: {
    baseURL: '/',
    retry: true,
    headers: {
      post: {
        'Content-Type': 'application/json',
      },
    },
  },
  publicRuntimeConfig: {},
}

export default config
