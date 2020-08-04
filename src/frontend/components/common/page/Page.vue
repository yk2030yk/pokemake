<template functional>
  <div class="page">
    <page-header v-if="props.header" :title="props.title" />
    <page-wrapper>
      <slot />
    </page-wrapper>
    <page-footer v-if="props.footer" />
  </div>
</template>

<script lang="ts">
import { createComponent, computed, ref } from '@vue/composition-api'

export default createComponent({
  props: {
    header: {
      type: Boolean,
      default: false
    },
    footer: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ""
    }
  },
})
</script>

<style lang="scss">
.page {
  width: 100%;
  height: 100%;
}
</style>
