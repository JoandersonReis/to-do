import { z } from 'zod';

export const paramSchema = z.object({
  id: z
    .string()
    .min(2, 'Campo Obrigatório!')
    .uuid('Formato do Id inválido! Precisa ser UUID'),
});

export type TParamSchema = z.infer<typeof paramSchema>;

export const createSchema = z.object({
  title: z
    .string()
    .min(2, 'Campo precisa ter 2 ou mais caracteres!')
    .toLowerCase(),
});
