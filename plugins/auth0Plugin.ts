import Vue from 'vue'
import { createAuth0 } from '@auth0/auth0-vue'

export default defineNuxtPlugin((nuxtApp) => {
  const runtimeConfig = useRuntimeConfig()
  console.log('auth0Plugin', Date.now())

  const config = unwrap(runtimeConfig.public.auth0)

  const auth0Config = createAuthConfig(config)
  let auth0 = createAuth0(auth0Config)

  console.table(auth0Config)

  let v = Vue.default || Vue

  v.use(auth0.default || auth0)

  // now available on `nuxtApp.$auth0`
  // return {
  //   provide: {
  //     auth0: () => auth0,
  //   },
  // }
})

function createAuthConfig(config: any) {
  let {
    domain,
    domainUrl,
    clientId,
    cacheLocation,
    useRefreshTokens,
    useRefreshTokensFallback,
    authorizationParams,
  } = config

  let { scope, audience, redirect_uri } = authorizationParams

  return {
    domain,
    domainUrl,
    clientId,
    cacheLocation,
    useRefreshTokens,
    useRefreshTokensFallback,
    authorizationParams: {
      scope,
      audience,
      redirect_uri: `${self.location.origin}${redirect_uri}`,
    },
  }
}

function unwrap(object: Object) {
  return JSON.parse(JSON.stringify(object))
}
