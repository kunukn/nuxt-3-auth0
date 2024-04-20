export default defineNuxtPlugin((nuxtApp) => {
  if (process.server && process.env.NODE_ENV !== 'test') return {}

  console.log('initialStartupPlugin', new Date())

  return {}
})
