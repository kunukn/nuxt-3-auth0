import type { Auth0Plugin } from '@auth0/auth0-vue'

interface IGlobal {
  $auth0?: Auth0Plugin
}

export default <IGlobal>{}
