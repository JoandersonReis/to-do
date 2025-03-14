import { uuidRegex } from 'src/utils/config';
import { z } from 'zod';

export const paramSchema = z.object({
  id: z
    .string()
    .min(2, 'Campo Obrigatório!')
    .regex(new RegExp(uuidRegex), 'Id inválido!'),
});

export type TParamSchema = z.infer<typeof paramSchema>;

export const createSchema = z.object({
  name: z
    .string()
    .min(2, 'Campo precisa ter 2 ou mais caracteres!')
    .toLowerCase(),
  document_id: z
    .string()
    .min(2, 'Campo Obrigatório!')
    .regex(new RegExp(uuidRegex), 'Campo document_id inválido!'),
});
