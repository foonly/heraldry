<script setup lang="ts">
import { useCOAStore } from '@/stores/coa'
const coa = useCOAStore()
</script>

<template>
  <input type="text" v-model="coa.bannerText" />
</template>
