<script lang="ts">
/*
https://developer.auth0.com/resources/guides/spa/vue/basic-authentication#configure-a-vue-js-authentication-plugin

What are the benefits of using a callback page?
Implementing a page that specializes in handling the user redirection from the Auth0 Universal Login Page to your application (the callback event) has some benefits:

Your users won't see any flashing of the home page component, which renders at the root path, /.
By showing the navigation bar in the /callback route, your user may feel that your Vue.js application loads fast.
*/

export default defineComponent({
  mounted() {
    console.log('auth callback page')
    const urlParams = new URLSearchParams(window.location.search)
    for (const param of urlParams) {
      console.log(param)
    }
  },
})
</script>

<template>
  <h2>callback</h2>
</template>
