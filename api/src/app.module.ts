import { Module } from '@nestjs/common';
import { UserController } from './models/User/user.controller';
import { UserRepository } from './models/User/user.repository';
import { UserService } from './models/User/user.service';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [UserService, UserRepository],
})
export class AppModule {}
