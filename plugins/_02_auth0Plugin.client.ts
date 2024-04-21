import Global from '~/Global'
import { createAuth0 } from '@auth0/auth0-vue'

export default defineNuxtPlugin((nuxtApp) => {
  console.log('auth0Plugin', new Date())

  // Config parsing
  const runtimeConfig = useRuntimeConfig()
  const auth0Config = createAuthConfig(unwrap(runtimeConfig.public.auth0))
  console.table(auth0Config)
  const $auth0 = createAuth0(auth0Config)

  // Install the plugin
   nuxtApp.vueApp.use($auth0) // The Crux
  
  Global.$auth0 = $auth0
  // now available on `nuxtApp.$auth0`
  return {
    provide: {
      auth0: $auth0,
    },
  }
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
