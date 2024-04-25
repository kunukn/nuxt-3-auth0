<template>
  <div>
    <div>
      <h1>External API</h1>
      <h3>!! Only works on localhost, not deployed to PROD.</h3>
      <p class="mb-16px">
        Call an external API by clicking the button below. This will call the
        external API using an access token, and the API will validate it using
        the API's audience value.
      </p>

      <p>{{ baseURL }}</p>
      <input type="text" v-model="urlText" @keyup.enter="callUrl" />
      <button @click="callUrl">GET</button>
    </div>

    <div>
      <h6>Result</h6>
      <pre>{{ JSON.stringify(apiMessage, null, 1) }}</pre>
      <hr />
      <p class="token">{{ token }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { useAuth0 } from '@auth0/auth0-vue'
import { ref } from 'vue'

definePageMeta({
  layout: 'navigation-bar-layout',
  middleware: ['auth'], // middleware must be defined in pages. Cannot be done in layout.
})

export default {
  setup() {
    const runtimeConfig = useRuntimeConfig()
    const { baseURL } = runtimeConfig.public

    const auth0 = useAuth0()
    const apiMessage = ref()
    const token = ref()
    const urlText = ref('/api/external')
    return {
      apiMessage,
      token,
      urlText,
      baseURL,

      async callUrl() {
        apiMessage.value = ''
        token.value = ''
        const accessToken = await auth0.getAccessTokenSilently()
        token.value = accessToken
        try {
          const result = await $fetch(urlText.value, {
            method: 'GET',
            baseURL,
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          })

          apiMessage.value = result
        } catch (err: any) {
          apiMessage.value = `Error: the server responded with '${err.response.status}: ${err.response.statusText}'`
        }
      },
    }
  },
}
</script>

<style scoped>
pre {
  font-size: 14px;
  margin-bottom: 1rem;
}

.token {
  padding-top: 16px;
  word-break: break-all;
  font-size: 14px;
}
</style>
