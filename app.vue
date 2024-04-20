<script>
import { defineComponent } from '@vue/composition-api'
import { useAuth0 } from '@auth0/auth0-vue'

export default defineComponent({
  setup() {
    const nuxtApp = useNuxtApp()
    const nuxtApp_$auth0 = nuxtApp.$auth0
    const useAuth0_auth0vue = useAuth0()

    const $auth0 = nuxtApp_$auth0

    console.log('loginWithRedirect', $auth0.loginWithRedirect)

    return {
      isLoading: $auth0.isLoading,
      isAuthenticated: $auth0.isAuthenticated,
      user: $auth0.user,
      loginWithRedirect: $auth0.loginWithRedirect,
      nuxtApp_$auth0,
      useAuth0_auth0vue,
    }
  },
})
</script>

<template>
  <div>
    <p>isLoading: {{ isLoading }}</p>
    <p>isAuthenticated: {{ isAuthenticated }}</p>
    <p>user: {{ user }}</p>
    <pre>{{ nuxtApp_$auth0 }}</pre>
    <hr />
    <pre>{{ useAuth0_auth0vue }}</pre>
  </div>
</template>
