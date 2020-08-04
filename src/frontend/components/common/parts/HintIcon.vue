<template>
  <div @mouseover="over" @mouseleave="leave" class="hint-icon-wrapper">
    <common-icon :color="color" :size="size" name="mdi-help-circle" />
    <transition name="fade-hint-message">
      <div
        :style="styleOption"
        v-if="hintMessage && isMouseOver"
        class="hint-message"
      >
        <p>{{ hintMessage }}</p>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
// import { Vue, Component, Prop } from 'nuxt-property-decorator'

// import CommonIcon from './CommonIcon.vue'

// @Component({
//   components: {
//     CommonIcon
//   }
// })
// export default class HintIcon extends Vue {
//   @Prop({ default: '' })
//   hintMessage: string

//   @Prop({ default: '#999' })
//   color: string

//   @Prop({ default: '20px' })
//   size: string

//   public isMouseOver = false

//   public over() {
//     this.isMouseOver = true
//   }

//   public leave() {
//     this.isMouseOver = false
//   }

//   public get styleOption() {
//     const size = parseInt(this.size)
//     return {
//       width: size * 8 + 'px',
//       bottom: `${size + 5}px`
//     }
//   }
// }
import { createComponent, computed, ref } from '@vue/composition-api'

export default createComponent({})
</script>

<style lang="scss" scoped>
.hint-icon-wrapper {
  position: relative;
}

.hint-message {
  position: absolute;
  width: 100px;
  padding: 5px;
  font-size: 10px;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 5px;
}

.fade-hint-message-enter-active,
.fade-hint-message-leave-active {
  transition: opacity 0.2s;
}
.fade-hint-message-enter,
.fade-hint-message-leave-to {
  opacity: 0;
}
</style>
