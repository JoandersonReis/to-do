import { Injectable } from '@nestjs/common';
import { TWhereIds } from '../types';
import { DocumentRepository } from './document.repository';
import { TDocumentCreate } from './types';

@Injectable()
export class DocumentService {
  constructor(private repository: DocumentRepository) {}

  async single(ids: TWhereIds) {
    const document = await this.repository.single(ids, true, true);

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
    await this.repository.single(ids, false, true);

    const documentUpdated = await this.repository.update(data, ids);

    return documentUpdated;
  }

  async delete(ids: TWhereIds) {
    await this.repository.single(ids, false, true);

    const documentDeleted = await this.repository.delete(ids);

    return documentDeleted;
  }
}
