import { prisma } from 'prisma/prisma';
import { TDocumentCreate, TDocumentWhereIds } from './types';

export class DocumentRepository {
  async single(where: TDocumentWhereIds, tasks: boolean = false) {
    const document = await prisma.document.findUnique({
      where,
      include: {
        Task: tasks,
      },
    });

    return document;
  }

  async show(userId: string) {
    const documents = await prisma.document.findMany({
      where: {
        user_id: userId,
      },
    });

    return documents;
  }

  async create(data: TDocumentCreate, userId: string) {
    const document = await prisma.document.create({
      data: { ...data, user_id: userId },
    });

    return document;
  }

  async update(data: TDocumentCreate, where: TDocumentWhereIds) {
    const document = await prisma.document.update({
      where,
      data,
    });

    return document;
  }

  async delete(where: TDocumentWhereIds) {
    const document = await prisma.document.delete({
      where,
    });

    return document;
  }
}
