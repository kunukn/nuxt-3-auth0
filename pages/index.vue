<script>
import { defineComponent } from '@vue/composition-api'
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
  <div>
    <p>isLoading: {{ isLoading }}</p>
    <p>isAuthenticated: {{ isAuthenticated }}</p>
    <p>user: {{ user }}</p>
  </div>
</template>

<style scoped>
pre {
  font-size: 12px;
}
</style>
