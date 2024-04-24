<script lang="ts">
import { useAuth0 } from '@auth0/auth0-vue'

definePageMeta({
  layout: 'navigation-bar-layout',
})

export default defineComponent({
  setup() {
    const $auth0 = useAuth0()

    return {
      isLoading: $auth0.isLoading,
      isAuthenticated: $auth0.isAuthenticated,
      user: $auth0.user,
    }
  },
})
</script>

<template>
  <div class="user-info">
    <p>isLoading: {{ isLoading }}</p>
    <p>isAuthenticated: {{ isAuthenticated }}</p>
    <p>user:</p>
    <pre>{{ JSON.stringify(user, null, 1) }}</pre>
  </div>
</template>

<style scoped>
.user-info {
  font-size: 14px;
}
</style>
