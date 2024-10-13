<script setup lang="ts">
import CoatOfArms from '@/components/svgParts/CoatOfArms.vue'
import TabGeneral from '@/components/TabGeneral.vue'
</script>

<template>
  <main class="generator">
    <div class="card coa">
      <CoatOfArms />
    </div>
    <div class="card settings">
      <TabGeneral />
    </div>
  </main>
</template>
