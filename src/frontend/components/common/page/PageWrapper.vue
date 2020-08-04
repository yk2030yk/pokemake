<template functional>
  <div class="page-wrapper">
    <slot />
  </div>
</template>

<script lang="ts">
import { createComponent, computed, ref } from '@vue/composition-api'

export default createComponent({})
</script>

<style lang="scss">
.page-wrapper {
  display: flex;
  flex-direction: column;
  padding: $space $page-content-side-space;
  background-color: $bg-color;
}
</style>
