import { Injectable } from '@nestjs/common';
import { errorResponse } from 'src/utils/errorResponse';
import { DocumentRepository } from '../Document/document.repository';
import { TWhereIds } from '../types';
import { TaskRepository } from './task.repository';
import { TTaskCreate } from './types';

@Injectable()
export class TaskService {
  constructor(private repository: TaskRepository) {}

  async create(data: TTaskCreate, userId: string) {
    const documentRepository = new DocumentRepository();

    await documentRepository.single(
      {
        id: data.document_id,
        user_id: userId,
      },
      false,
      true,
    );

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
