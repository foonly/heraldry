import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useCOAStore = defineStore(
  'coa',
  () => {
    const name = ref('')
    const bannerText = ref('')
    const division = ref('')
    const tinctures = ref({
      outer: 'var(--heraldry-tincture-azure)',
      inner: 'var(--heraldry-tincture-gules)',
      shield: 'var(--heraldry-tincture-or)',
      division: 'var(--heraldry-tincture-vert)'
    })

    return { name, bannerText, division, tinctures }
  },
  {
    persist: {
      storage: sessionStorage
    }
  }
)
