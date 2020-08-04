<template>
  <button :style="styleOption" @click="_click" class="common-button">
    {{ text }}
  </button>
</template>

<script lang="ts">
import { createComponent, computed, ref } from '@vue/composition-api'

export default createComponent({})
// import { Vue, Component, Prop } from 'nuxt-property-decorator'
// import { scss } from '~/lib/scss'

// const wGreen = scss.getColor('wGreen')
// const wDarkGreen = scss.getColor('wDarkGreen')

// @Component
// export default class CommonIcon extends Vue {
//   @Prop({ default: true })
//   text: string

//   @Prop({ default: wGreen })
//   color: string

//   @Prop({ default: wDarkGreen })
//   disabledColor: string

//   @Prop({ default: 'auto' })
//   width: string

//   @Prop({ default: undefined })
//   onClick: Function

//   public get styleOption() {
//     return {
//       '--button-background-color': this.color,
//       '--button-disabled-background-color': this.disabledColor,
//       width: this.width
//     }
//   }

//   private _click() {
//     if (this.onClick) {
//       this.onClick()
//     }
//   }
// }
</script>

<style lang="scss" scoped>
.common-button {
  padding: 5px;
  color: #fff;
  background-color: var(--button-background-color);
  border-radius: 3px;
  &:disabled {
    background-color: var(--button-disabled-background-color);
  }
}
</style>
