<script lang="ts">
import { useAuth0 } from '@auth0/auth0-vue'

export default defineComponent({
  setup() {
    const { loginWithRedirect, isLoading, isAuthenticated, user } = useAuth0()

    return {
      isLoading,
      isAuthenticated,
      user,
      login: () => {
        loginWithRedirect({
          appState: {
            targetUrl: self.location.pathname, // Take me there after login.
            mode: 'login', // Custom thing for me, you properly don't need this.
          },
          authorizationParams: {
            redirect_uri: `${self.location.origin}?uiMode=login`,
            ui_locales: 'en', // Custom thing for me, you properly don't need this.
          },
        })
      },
      createAccount: () => {
        loginWithRedirect({
          appState: {
            mode: 'signup',
          },
          authorizationParams: {
            redirect_uri: `${self.location.origin}/auth-callback?uiMode=signup`,
            screen_hint: 'signup',
            ui_locales: 'en', // Custom thing for me, you properly don't need this.
          },
        })
      },
    }
  },
})
</script>

<template>
  <h2>Login</h2>
  <div>isAuthenticated {{ isAuthenticated }}</div>
  <div>isLoading {{ isLoading }}</div>
  <div class="buttons">
    <button @click="login">Log in</button>
    <button @click="createAccount">Create account</button>
  </div>
</template>

<style scoped>
button {
  margin-block-end: 1rem;
}

.buttons {
  display: flex;
  gap: 1rem;
}
</style>
