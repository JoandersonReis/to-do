export type TErrorResponse = {
  description: string;
  status: number;
  errors?: object;
};

export type TSchemaType = 'body' | 'params' | 'queries';
