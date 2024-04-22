<template>
  <div>
    <p>Default layout content shared across all pages</p>
    <hr />
    <div class="page">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
export default defineComponent({
  onMounted() {
    console.log('default layout')
  },
})
</script>
