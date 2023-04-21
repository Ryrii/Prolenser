import { Injectable } from '@nestjs/common';

@Injectable()
export class HelloService {
    hello = 'hello';
    getHello(): string {
        return this.hello;
      }
}
