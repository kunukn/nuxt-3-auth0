import global from '~/Global'
import { watch } from 'vue'

export default defineNuxtRouteMiddleware((to, from) => {
  let authService = global.$auth0

  const fn = () => {
    if (!authService.isAuthenticated) {
      return navigateTo('/login')
    }
  }

  if (!authService.loading) {
    return fn()
  }

  watch(authService.loading, async (current, previous) => {
    if (current === false) {
      return fn()
    }
  })
})