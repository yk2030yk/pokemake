<template>
  <v-icon :color="color" :size="size">{{ name }}</v-icon>
</template>

<script lang="ts">
// import { Vue, Component, Prop } from 'nuxt-property-decorator'

// @Component
// export default class CommonIcon extends Vue {
//   @Prop({ required: true })
//   name: string

//   @Prop({ default: '#1cb57b' })
//   color: string

//   @Prop({ default: '30px' })
//   size: string
// }
import { createComponent, computed, ref } from '@vue/composition-api'

export default createComponent({})
</script>

<style lang="scss" scoped></style>
