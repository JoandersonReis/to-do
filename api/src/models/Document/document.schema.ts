import { z } from 'zod';

const uuidRegex =
  '^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$';

export const paramSchema = z.object({
  id: z
    .string()
    .min(2, 'Campo Obrigatório!')
    .regex(new RegExp(uuidRegex), 'Id inválido!'),
});

export type TParamSchema = z.infer<typeof paramSchema>;

export const createSchema = z.object({
  title: z
    .string()
    .min(2, 'Campo precisa ter 2 ou mais caracteres!')
    .toLowerCase(),
});
