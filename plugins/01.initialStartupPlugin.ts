export default defineNuxtPlugin((nuxtApp) => {
  // skip middleware on server
  if (import.meta.server) return

  console.log('initialStartupPlugin', new Date())
})
