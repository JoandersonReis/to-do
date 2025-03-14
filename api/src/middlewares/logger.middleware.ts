import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

import { JWT } from 'src/utils/JWT';
import { ENV } from 'src/utils/config';
import { TLoggerToken } from './types';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(request: Request, response: Response, next: NextFunction) {
    const [bearer, accessToken] = request.headers.authorization.split(' ');

    if (!bearer) {
      return response.status(401).json({
        error_description: 'Token must been type Bearer',
      });
    }

    if (!accessToken) {
      return response.status(401).json({
        error_description: 'Token required',
      });
    }

    try {
      const token = JWT.verifyToken(ENV.jwtSecret, accessToken) as TLoggerToken;

      request.user_id = token.sub;

      next();
    } catch (err) {
      return response.status(err.status).json(err);
    }
  }
}
