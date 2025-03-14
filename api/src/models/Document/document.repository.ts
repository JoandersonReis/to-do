import { prisma } from 'prisma/prisma';
import { errorResponse } from 'src/utils/errorResponse';
import { TWhereIds } from '../types';
import { TDocumentCreate } from './types';

export class DocumentRepository {
  async single(
    where: TWhereIds,
    tasks: boolean = false,
    verify: boolean = false,
  ) {
    const document = await prisma.document.findUnique({
      where,
      include: {
        Task: tasks,
      },
    });

    if (!document && verify) {
      throw errorResponse('Documento não existe!', 404);
    }

    return document;
  }

  async show(userId: string) {
    const documents = await prisma.document.findMany({
      where: {
        user_id: userId,
      },
      orderBy: {
        created_at: 'desc',
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

  async update(data: TDocumentCreate, where: TWhereIds) {
    const document = await prisma.document.update({
      where,
      data,
    });

    return document;
  }

  async delete(where: TWhereIds) {
    const document = await prisma.document.delete({
      where,
    });

    return document;
  }
}
