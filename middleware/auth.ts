import { useAuth0 } from '@auth0/auth0-vue'
import { watch } from 'vue'

export default defineNuxtRouteMiddleware((to, from) => {
  if (import.meta.server) return

  console.log('auth-middleware')

  let auth = useAuth0()

  const fn = () => {
    if (!auth.isAuthenticated.value) {
      return navigateTo('/login')
    }
  }

  if (!auth.isLoading.value) {
    return fn()
  }

  watch(auth.isLoading, async (current, previous) => {
    if (current === false) {
      return fn()
    }
  })
})
