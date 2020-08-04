<template functional>
  <header class="page-header">
    <div class="page-header-content">
      <div class="page-header-title" v-if="props.title">
        <p>{{ props.title }}</p>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { createComponent, computed, ref } from '@vue/composition-api'

export default createComponent({})
</script>

<style lang="scss">
.page-header {
  width: 100%;
  height: $header-height;
  background-color: #fff;
  border-bottom: solid 1px #999;
}

.page-header-content {
  display: flex;
  align-items: center;
  height: 100%;
  padding: 10px;
}

.page-header-title {
  font-size: $font-size-middle;
  font-weight: bold;
  color: $w-green;
}
</style>
