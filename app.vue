<script>
import { defineComponent } from '@vue/composition-api'
import { useAuth0 } from '@auth0/auth0-vue'

export default defineComponent({
  setup() {
    const { loginWithRedirect, isLoading, isAuthenticated, user } = useAuth0()
    return {
      loginWithRedirect,
      isLoading,
      isAuthenticated,
      user,
    }
  },
})
</script>

<template>
  <div>
    <p>isLoading: {{isLoading}}</p>
    <p>isAuthenticated: {{isAuthenticated}}</p>
    <p>user: {{user}}</p>
  </div>
</template>
