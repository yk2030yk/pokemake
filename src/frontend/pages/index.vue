<template>
  <page header footer title="dev-tool">
    <page-content>
      <main-content />
    </page-content>
  </page>
</template>

<script lang="ts">
import { createComponent, computed, ref, reactive, toRefs } from '@vue/composition-api'
import MainContent from '@/components/index'

export default createComponent({
  components: {
    MainContent
  }
})
</script>
