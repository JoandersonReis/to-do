import { TErrorResponse } from './types';

export function errorResponse(
  description: string,
  status: number = 400,
  errors?: object,
): TErrorResponse {
  return {
    description,
    status,
    errors,
  };
}
