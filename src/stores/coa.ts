import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCoaStore = defineStore('coa', () => {
  const name = ref('')
  const bannerText = ref('')

  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  return { name, bannerText, increment }
})
