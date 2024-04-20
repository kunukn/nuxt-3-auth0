<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  setup() {
    const nuxtApp = useNuxtApp()
    const $auth0 = nuxtApp.$auth0

    return {
      isLoading: $auth0.isLoading,
      isAuthenticated: $auth0.isAuthenticated,
      user: $auth0.user,
      $auth0,
    }
  },
})
</script>

<template>
  <div>
    <p>isLoading: {{ isLoading }}</p>
    <p>isAuthenticated: {{ isAuthenticated }}</p>
    <p>user: {{ user }}</p>
    <pre>{{ $auth0 }}</pre>
  </div>
</template>
