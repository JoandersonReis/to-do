import { z } from "zod"

export const taskCreateSchema = z.object({
  name: z
    .string()
    .min(2, "Campo precisa ter 2 ou mais caracteres!")
    .toLowerCase(),
  document_id: z
    .string()
    .min(2, "Campo Obrigatório!")
    .uuid("Formato do Id inválido! Precisa ser UUID"),
  done: z.boolean().optional(),
})

export type TTaskCreateSchema = z.infer<typeof taskCreateSchema>
