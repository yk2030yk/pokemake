<template functional>
  <div class="page-content">
    <slot />
  </div>
</template>

<script lang="ts">
import { createComponent, computed, ref } from '@vue/composition-api'

export default createComponent({})
</script>

<style lang="scss" scoped>
.page-content {
  width: 100%;
  margin-bottom: $space;
}
</style>
