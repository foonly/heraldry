import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useCOAStore = defineStore(
  'coa',
  () => {
    const name = ref('')
    const bannerText = ref('')
    const division = ref('')
    const tinctures = ref({
      outer: 'blue',
      inner: 'red'
    })

    return { name, bannerText, division, tinctures }
  },
  {
    persist: {
      storage: sessionStorage
    }
  }
)
