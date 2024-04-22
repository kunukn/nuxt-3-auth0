<template>
  <div>
    <div>
      <h1>External API</h1>
      <p>
        Call an external API by clicking the button below. This will call the
        external API using an access token, and the API will validate it using
        the API's audience value.
      </p>
      <div class="buttons">
        <button @click="callMeApi">Me</button>
      </div>
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
  middleware: ['auth'],
})

export default {
  setup() {
    const runtimeConfig = useRuntimeConfig()
    const { baseURL } = runtimeConfig.public

    const auth0 = useAuth0()
    const apiMessage = ref('')
    const token = ref('')
    const urlText = ref('/appsettings')
    return {
      apiMessage,
      token,
      urlText,
      async callMeApi() {
        apiMessage.value = ''
        token.value = ''
        const accessToken = await auth0.getAccessTokenSilently()
        token.value = accessToken
        try {
          const url = `/v2/users/me`
          const response = await $fetch(url, {
            baseURL,
            headers: {
              Authorization: `Bearer ${accessToken}`,
              DEBUG_CURRENT_DATE: '',
            },
          })

          // @ts-ignore
          apiMessage.value = response
        } catch (e: any) {
          apiMessage.value = `Error: the server responded with '${e.response.status}: ${e.response.statusText}'`
        }
      },
      async callUrl() {
        apiMessage.value = ''
        token.value = ''
        const accessToken = await auth0.getAccessTokenSilently()
        token.value = accessToken
        try {
          const url = urlText.value

          const result = await $fetch(url, {
            method: 'GET',
            baseURL,
            headers: {
              Authorization: `Bearer ${accessToken}`,
              DEBUG_CURRENT_DATE: '',
            },
          })

          // @ts-ignore
          apiMessage.value = result
        } catch (e: any) {
          apiMessage.value = `Error: the server responded with '${e.response.status}: ${e.response.statusText}'`
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

.buttons {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
}

.token {
  padding-top: 16px;
  word-break: break-all;
  font-size: 14px;
}
</style>
