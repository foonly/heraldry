<script setup lang="ts">
import TinctureSelect from './fields/TinctureSelect.vue'
import DivisionSelect from './fields/DivisionSelect.vue'
import { useCOAStore } from '@/stores/coa'
const coa = useCOAStore()
</script>

<template>
  <input type="text" v-model="coa.bannerText" />
  <TinctureSelect v-model="coa.tinctures.outer" />
  <TinctureSelect v-model="coa.tinctures.inner" />
  <TinctureSelect v-model="coa.tinctures.shield" />
  <DivisionSelect v-model="coa.division" />
  <TinctureSelect v-if="coa.division" v-model="coa.tinctures.division" />
</template>
