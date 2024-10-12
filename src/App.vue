<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/generator">Coat of Arms</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>
