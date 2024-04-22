<template>
  <Navigation />
  <div class="page">
      <slot />
    </div>
</template>

<script>
import Navigation from '~/components/Navigation.vue'
export default {
  components: { Navigation },
}
</script>
