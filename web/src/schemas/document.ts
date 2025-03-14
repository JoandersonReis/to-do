import { z } from "zod"

export const documentCreateSchema = z.object({
  title: z
    .string()
    .min(2, "Campo precisa ter 2 ou mais caracteres!")
    .toLowerCase(),
})

export type TDocumentCreateSchema = z.infer<typeof documentCreateSchema>
