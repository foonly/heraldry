import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useCOAStore = defineStore('coa', () => {
  const name = ref('')
  const bannerText = ref('')

  return { name, bannerText }
})
