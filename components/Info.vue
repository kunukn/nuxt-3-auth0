<template>
  <div class="info">
    <hr />
    <a href="https://jwt.io" target="_blank">jwt.io</a>
    <p class="token"><b>Token:</b> {{ token }}</p>
    <hr />

    <a :href="wellKnownUrl" target="_blank">openid-configuration</a>

    <p>auth0Config:</p>
    <pre>{{ JSON.stringify(config, null, 1) }}  </pre>
  </div>
</template>

<script lang="ts">
import { useAuth0 } from '@auth0/auth0-vue'
import global from '@/Global'

export default {
  setup() {
    const { isAuthenticated, getAccessTokenSilently } = useAuth0()
    const runtimeConfig = useRuntimeConfig() // Nuxt runtime config

    const token = ref('')

    watch(
      isAuthenticated,
      (newVal) => {
        if (newVal) {
          getAccessTokenSilently().then((t) => {
            token.value = t
          })
        }
      },
      { immediate: true }
    )

    return {
      token,
      wellKnownUrl: `https://${runtimeConfig.public.auth0.domain}/.well-known/openid-configuration`,
      config: global.auth0Config,
    }
  },
}
</script>

<style scoped>
.info {
  font-size: 14px;
  width: 100%;
  padding: 16px;
  background: #f2f2f2;
}

.token {
  word-break: break-all;
  font-size: 12px;
}
</style>
