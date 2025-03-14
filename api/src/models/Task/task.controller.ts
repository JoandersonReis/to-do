import { Controller, Delete, Post, Put, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { Validation } from 'src/utils/Validation';
import { createSchema, paramSchema, TParamSchema } from './task.schema';
import { TaskService } from './task.service';
import { TTaskCreate } from './types';

@Controller('tasks')
export class TaskController {
  constructor(private readonly service: TaskService) {}

  @Post()
  async create(@Req() request: Request, @Res() response: Response) {
    try {
      Validation.validate(request, createSchema, 'body');

      const data = request.body;

      const result = await this.service.create(data, request.user_id);

      return response.json(result);
    } catch (err) {
      return response.status(err.status).json(err);
    }
  }

  @Put()
  async update(@Req() request: Request, @Res() response: Response) {
    try {
      Validation.validate(request, createSchema, 'body');
      Validation.validate(request, paramSchema, 'params');

      const data = request.body as TTaskCreate;
      const params = request.params as TParamSchema;

      const result = await this.service.update(data, {
        id: params.id,
        user_id: request.user_id,
      });

      return response.json(result);
    } catch (err) {
      return response.status(err.status).json(err);
    }
  }

  @Delete()
  async delete(@Req() request: Request, @Res() response: Response) {
    try {
      Validation.validate(request, paramSchema, 'params');

      const params = request.params as TParamSchema;

      const result = await this.service.delete({
        id: params.id,
        user_id: request.user_id,
      });

      return response.json(result);
    } catch (err) {
      return response.status(err.status).json(err);
    }
  }
}
