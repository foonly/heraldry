<script setup lang="ts">
import { useCOAStore } from '@/stores/coa'
const coa = useCOAStore()
</script>

<template>
  <input type="text" v-model="coa.bannerText" />
  <input type="text" v-model="coa.tinctures.outer" />
  <input type="text" v-model="coa.tinctures.inner" />
</template>
