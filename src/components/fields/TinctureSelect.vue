<script setup lang="ts">
import { tinctures } from '@/constants'
const model = defineModel()
const getClass = (tincture: string) => {
  return model.value === tincture ? 'selected' : ''
}
const selectTincture = (tincture: string) => {
  model.value = tincture
}
</script>

<template>
  <div class="tincture-select">
    <button
      v-for="tincture in tinctures"
      :key="tincture"
      :class="getClass(tincture)"
      :style="`background-color: var(--heraldry-tincture-${tincture}); color: var(--heraldry-text-on-${tincture})`"
      @click="selectTincture(tincture)"
    >
      {{ tincture }}
    </button>
  </div>
</template>
