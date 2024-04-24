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
            target: '/', // self.location.pathname, // Take me here as final destination.
          },
          authorizationParams: {
            redirect_uri: `${self.location.origin}/auth-callback?uiMode=login`,
            ui_locales: 'en', // Custom thing for me, optional.
          },
        })
      },
      createAccount: () => {
        loginWithRedirect({
          appState: {
            target: '/', // Take me here as final destination.
          },
          authorizationParams: {
            redirect_uri: `${self.location.origin}/auth-callback?uiMode=signup`,
            screen_hint: 'signup', // https://auth0.com/docs/authenticate/login/auth0-universal-login/universal-login-vs-classic-login/universal-experience#signup
            ui_locales: 'en', // Custom thing for me, optional.
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
