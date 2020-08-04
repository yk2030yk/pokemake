<template>
  <div class="error-page-box">
    error
  </div>
</template>

<script lang="ts">
import { createComponent, computed, ref } from '@vue/composition-api'

export default createComponent({
})
</script>

<style lang="scss" scoped>
.error-page-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;

  &__message {
    font-size: $font-size-middle;
  }

  .status-code {
    margin-top: 10px;
    font-size: $font-size-default;
    text-align: right;
  }
}
</style>
