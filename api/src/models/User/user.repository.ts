import { prisma } from 'prisma/prisma';
import { TUserData } from './types';

export class UserRepository {
  async create(data: TUserData) {
    const user = await prisma.user.create({
      data,
    });

    return user;
  }

  async single(data: TUserData) {
    const user = await prisma.user.findUnique({
      where: {
        username: data.username,
      },
    });

    return user;
  }
}
