import { z } from 'zod'

export const coaSchema = z.object({
  name: z.string().default(''),
  bannerText: z.string().default(''),
  division: z.string().default(''),
  tinctureOuter: z.string().default('azure'),
  tinctureInner: z.string().default('gules'),
  tinctureShield: z.string().default('or'),
  tinctureDivision: z.string().default('vert')
})
