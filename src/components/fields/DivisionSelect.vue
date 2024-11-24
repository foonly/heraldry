<script setup lang="ts">
import { divisions } from '@/constants'
import ShieldBase from '../svgParts/ShieldBase.vue'
const model = defineModel()
const getClass = (division: string) => {
  return model.value === division ? 'selected' : ''
}
const selectDivision = (division: string) => {
  model.value = division
}
</script>

<template>
  <div class="division-select">
    <button :class="getClass('')" @click="selectDivision('')">
      <ShieldBase division="" />
      none
    </button>
    <button
      v-for="division in divisions"
      :key="division"
      :class="getClass(division)"
      @click="selectDivision(division)"
    >
      <ShieldBase :division="division" />
      {{ division }}
    </button>
  </div>
</template>
