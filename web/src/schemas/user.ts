import { z } from "zod"

export const loginUserSchema = z.object({
  username: z
    .string()
    .min(2, "Username precisa ter 2 ou mais caracteres!")
    .toLowerCase(),
})

export type TLoginUserSchema = z.infer<typeof loginUserSchema>
