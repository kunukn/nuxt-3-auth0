// @ts-nocheck

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  runtimeConfig: {
    // Keys within public, will be also exposed to the client-side
    public: {
      apiBase: process.env.NUXT_ENV_BASE_API_URL,
      auth0: {
        domain: process.env.NUXT_ENV_AUTH0_DOMAIN,
        domainUrl: process.env.NUXT_ENV_AUTH0_DOMAIN_URL,
        clientId: process.env.NUXT_ENV_AUTH0_CLIENT_ID,
        cacheLocation: 'localstorage',
        useRefreshTokens: true,
        useRefreshTokensFallback: true,
        authorizationParams: {
          scope: process.env.NUXT_ENV_AUTH0_SCOPE,
          audience: process.env.NUXT_ENV_AUTH0_AUDIENCE,
          redirect_uri: process.env.NUXT_ENV_AUTH0_CALLBACK_URL,
        },
      },
    },
  },
  devtools: { enabled: true },
  devServer: {
    https: {
      key: './.cert/key.pem',
      cert: './.cert/cert.pem',
    },
  },
  css: ['~/assets/css/ress.min.css', '~/assets/css/main.css'],
})
