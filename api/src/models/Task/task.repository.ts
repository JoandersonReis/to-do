import { Prisma } from '@prisma/client';
import { prisma } from 'prisma/prisma';
import { TWhereIds } from '../types';
import { TTaskCreate } from './types';

export class TaskRepository {
  async single(where: TWhereIds) {
    const task = await prisma.task.findUnique({
      where,
    });

    return task;
  }

  async create(data: TTaskCreate, userId: string) {
    const task = await prisma.task.create({
      data: { ...data, user_id: userId },
    });

    return task;
  }

  async update(data: Prisma.TaskUpdateInput, where: TWhereIds) {
    const task = await prisma.task.update({
      where,
      data,
    });

    return task;
  }

  async delete(where: TWhereIds) {
    const task = await prisma.task.delete({
      where,
    });

    return task;
  }
}
