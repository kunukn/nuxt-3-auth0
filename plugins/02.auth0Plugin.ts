import { createAuth0, useAuth0 } from '@auth0/auth0-vue'

import Global from '~/Global'

export default defineNuxtPlugin((nuxtApp) => {
  // skip middleware on server
  if (import.meta.server) return

  console.log('auth0Plugin', new Date())

  // Config parsing
  const runtimeConfig = useRuntimeConfig() // Nuxt runtime config
  const auth0Config = createAuthConfig(unwrap(runtimeConfig.public.auth0))
  console.table(auth0Config)
  const auth0 = createAuth0(auth0Config)

  // Install the plugin
  nuxtApp.vueApp.use(auth0) // The Crux
  Global.$auth0 = useAuth0()
})

function createAuthConfig(config: any) {
  let {
    domain,
    clientId,
    cacheLocation,
    useRefreshTokens,
    useRefreshTokensFallback,
    authorizationParams,
  } = config

  let { scope, audience, redirect_uri } = authorizationParams

  return {
    domain,
    domainUrl: `https://${domain}`,
    clientId,
    cacheLocation,
    useRefreshTokens,
    useRefreshTokensFallback,
    authorizationParams: {
      scope,
      audience,
      redirect_uri: `${window.location.origin}${redirect_uri}`,
    },
  }
}

function unwrap(object: Object) {
  return JSON.parse(JSON.stringify(object))
}
