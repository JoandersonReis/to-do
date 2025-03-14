import { Injectable } from '@nestjs/common';
import { errorResponse } from 'src/utils/errorResponse';
import { TWhereIds } from '../types';
import { TaskRepository } from './task.repository';
import { TTaskCreate } from './types';

@Injectable()
export class TaskService {
  constructor(private repository: TaskRepository) {}

  async create(data: TTaskCreate, userId: string) {
    const Task = await this.repository.create(data, userId);

    return Task;
  }

  async update(data: TTaskCreate, ids: TWhereIds) {
    const TaskExists = await this.repository.single(ids);

    if (!TaskExists) {
      throw errorResponse('Tarefa não existe!', 404);
    }

    const TaskUpdated = await this.repository.update(data, ids);

    return TaskUpdated;
  }

  async delete(ids: TWhereIds) {
    const TaskExists = await this.repository.single(ids);

    if (!TaskExists) {
      throw errorResponse('Tarefa não existe!', 404);
    }

    const TaskDeleted = await this.repository.delete(ids);

    return TaskDeleted;
  }
}
