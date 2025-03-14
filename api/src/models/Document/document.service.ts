import { Injectable } from '@nestjs/common';
import { errorResponse } from 'src/utils/errorResponse';
import { DocumentRepository } from './document.repository';
import { TDocumentCreate, TDocumentWhereIds } from './types';

@Injectable()
export class DocumentService {
  constructor(private repository: DocumentRepository) {}

  async single(ids: TDocumentWhereIds) {
    const document = await this.repository.single(ids, true);

    if (!document) {
      throw errorResponse('Documento não existe!', 404);
    }

    return document;
  }

  async show(userId: string) {
    const documents = await this.repository.show(userId);

    return documents;
  }

  async create(data: TDocumentCreate, userId: string) {
    const document = await this.repository.create(data, userId);

    return document;
  }

  async update(data: TDocumentCreate, ids: TDocumentWhereIds) {
    const documentExists = await this.repository.single(ids);

    if (!documentExists) {
      throw errorResponse('Documento não existe!', 404);
    }

    const documentUpdated = await this.repository.update(data, ids);

    return documentUpdated;
  }

  async delete(ids: TDocumentWhereIds) {
    const documentExists = await this.repository.single(ids);

    if (!documentExists) {
      throw errorResponse('Documento não existe!', 404);
    }

    const documentDeleted = await this.repository.delete(ids);

    return documentDeleted;
  }
}
