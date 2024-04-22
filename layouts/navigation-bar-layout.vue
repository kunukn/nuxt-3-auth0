<template>
  <Navigation />
  <div class="page">
    <slot />
  </div>
</template>

<script lang="ts">
export default {
  components: { Navigation },
  onMounted() {
    console.log('navigation-bar-layout')
  },
}
</script>
