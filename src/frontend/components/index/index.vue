<template>
  <div>
    <vue-simple-suggest
      v-model="selectedNo"
      display-attribute="fullName"
      value-attribute="fullName"
      :max-suggestions="0"
      :min-length="2"
      :filter-by-query="true"
      :filter="filterSuggest"
      :list="pokemonBaseList2"
    >
    </vue-simple-suggest>
  </div>
</template>

<script lang="ts">
import { createComponent, computed, ref, reactive, toRefs } from '@vue/composition-api'
import { pokemonBaseStore } from '~/store'
import _ from 'lodash'
import 'vue-simple-suggest/dist/styles.css' // Optional CSS
import { PokemonBase } from '@/lib/models/PokemonBase'

import moji from 'moji'

export default createComponent({
  setup ({}) {
    const selectedNo = ref("")

    const selectedNoList = []
    _.times(6, () => {
      []
    })

const state = reactive({
      selectedNoList: []
    })

    pokemonBaseStore.fetch()
    const pokemonBaseList = computed(() => pokemonBaseStore.pokemonBaseList)
    const pokemonBaseList2 = computed(() => pokemonBaseStore.pokemonBaseList.slice())

    const filterSuggest = (pokemonBase: PokemonBase, inputText: string) => {
      const normalized = moji(inputText).convert('HG', 'KK').toString()
      return pokemonBase.name.indexOf(normalized) > -1
    }

    return {
      selectedNo,
      pokemonBaseList,
      pokemonBaseList2,
      filterSuggest,
      state
    }
  }
})
</script>

<style lang="scss" scoped></style>
