import { Injectable } from '@nestjs/common';
import { Init } from './@types';

@Injectable()
export class AppService {
  getHello(): Init {
    return {
      message: 'Welcome to the NestJS Application!',
      info: 'This application is built using NestJS framework.',
      routes: [
        '/users - Manage users',
        '/products - Manage products',
        '/orders - Manage orders',
      ],
    };
  }
}
