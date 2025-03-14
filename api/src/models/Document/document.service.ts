import { Injectable } from '@nestjs/common';
import { errorResponse } from 'src/utils/errorResponse';
import { TWhereIds } from '../types';
import { DocumentRepository } from './document.repository';
import { TDocumentCreate } from './types';

@Injectable()
export class DocumentService {
  constructor(private repository: DocumentRepository) {}

  async single(ids: TWhereIds) {
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

  async update(data: TDocumentCreate, ids: TWhereIds) {
    const documentExists = await this.repository.single(ids);

    if (!documentExists) {
      throw errorResponse('Documento não existe!', 404);
    }

    const documentUpdated = await this.repository.update(data, ids);

    return documentUpdated;
  }

  async delete(ids: TWhereIds) {
    const documentExists = await this.repository.single(ids);

    if (!documentExists) {
      throw errorResponse('Documento não existe!', 404);
    }

    const documentDeleted = await this.repository.delete(ids);

    return documentDeleted;
  }
}
