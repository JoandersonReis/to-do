import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { LoggerMiddleware } from './middlewares/logger.middleware';
import { UserController } from './models/User/user.controller';
import { UserRepository } from './models/User/user.repository';
import { UserService } from './models/User/user.service';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [UserService, UserRepository],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .exclude(
        { path: '/users/login', method: RequestMethod.POST },
        { path: '/users', method: RequestMethod.POST },
      )
      .forRoutes('*');
  }
}
