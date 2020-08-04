<template>
  <v-progress-circular :color="color" :size="size" indeterminate />
</template>

<script lang="ts">
// import { Vue, Component, Prop } from 'nuxt-property-decorator'

// @Component
// export default class CommonProgress extends Vue {
//   @Prop({ default: '#1cb57b' })
//   color: string

//   @Prop({ default: '30' })
//   size: string
// }
import { createComponent, computed, ref } from '@vue/composition-api'

export default createComponent({})
</script>

<style lang="scss" scoped></style>
