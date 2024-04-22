export default defineNuxtRouteMiddleware((to, from) => {
  if (import.meta.server) return

  console.log(`router-middleware: from ${from.path} to: ${to.path}`)
})
