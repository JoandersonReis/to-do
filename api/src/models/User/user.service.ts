import { Injectable } from '@nestjs/common';
import { errorResponse } from 'src/utils/errorResponse';
import { TUserData } from './types';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(private repository: UserRepository) {}

  async create(data: TUserData) {
    const userAlreadyExists = await this.repository.single(data);

    if (userAlreadyExists) {
      throw errorResponse('Usuário já existe', 409);
    }

    const user = await this.repository.create(data);

    return user;
  }
}
