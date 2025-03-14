import { Controller, Post, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { Validation } from 'src/utils/Validation';
import { createUserSchema } from './user.schema';
import { UserService } from './user.service';

@Controller()
export class UserController {
  constructor(private readonly service: UserService) {}

  @Post('/users')
  async create(@Req() request: Request, @Res() response: Response) {
    try {
      Validation.validate(request, createUserSchema);
      const data = request.body;

      const user = await this.service.create(data);

      return response.status(201).json(user);
    } catch (err) {
      return response.status(err.status).json(err);
    }
  }

  @Post('/users/login')
  async login(@Req() request: Request, @Res() response: Response) {
    try {
      Validation.validate(request, createUserSchema);
      const data = request.body;

      const result = await this.service.create(data);

      return response.status(201).json(result);
    } catch (err) {
      return response.status(err.status).json(err);
    }
  }
}
