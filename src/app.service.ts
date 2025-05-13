import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello Aliyan welcome to learning Nestjs';
  }
}
