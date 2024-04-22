<template>
  <nav>
    <NuxtLink to="/">Home</NuxtLink>
    <NuxtLink to="/api">API</NuxtLink>
    <NuxtLink to="/login">Login</NuxtLink>
    <div class="logout">
      <button v-if="isAuthenticated" @click="clickLogout">Logout</button>
    </div>
  </nav>
</template>

<script>
import { useAuth0 } from '@auth0/auth0-vue'

export default {
  setup() {
    const { logout, isLoading, isAuthenticated, user } = useAuth0()

    return {
      isLoading,
      isAuthenticated,
      user,
      clickLogout: () => {
        logout({
          logoutParams: {
            returnTo: self.location.origin + '/login',
          },
        })
      },
    }
  },
}
</script>

<style scoped>
nav {
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  gap: 1rem;
  background: #f2f2f2;
  padding: 1rem;
}

button {
  border: 1px solid;
  padding: 4px;
}

.logout {
  margin-left: auto;
}
</style>
