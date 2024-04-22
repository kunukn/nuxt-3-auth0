<template>
  <p class="id-info">domain: {{ domain }}</p>
  <nav>
    <NuxtLink v-if="!isAuthenticated" to="/login">Login</NuxtLink>
    <NuxtLink to="/">Home</NuxtLink>
    <NuxtLink v-if="isAuthenticated" to="/api">API</NuxtLink>
    <p class="text-info">isAuthenticated: {{ isAuthenticated }}</p>
    <div v-if="isAuthenticated" class="logout">
      <button @click="clickLogout">Logout</button>
    </div>
  </nav>
</template>

<script lang="ts">
import { useAuth0 } from '@auth0/auth0-vue'

export default {
  setup() {
    const { logout, isLoading, isAuthenticated, user } = useAuth0()
    const runtimeConfig = useRuntimeConfig() // Nuxt runtime config

    return {
      isLoading,
      isAuthenticated,
      user,
      domain: runtimeConfig.public.auth0.domain,
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

.text-info {
  margin-left: auto;
  font-size: 14px;
}

.id-info {
  font-size: 14px;
  padding: 4px;
}
</style>
