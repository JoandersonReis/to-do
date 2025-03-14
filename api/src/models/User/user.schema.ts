import { z } from 'zod';

export const createUserSchema = z.object({
  username: z
    .string()
    .min(2, 'Username precisa ter 2 ou mais caracteres!')
    .toLowerCase(),
});
