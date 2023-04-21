import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HelloController } from './hello/hello.controller';
import { HelloService } from './hello/hello.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost:27017/db1')],
  controllers: [AppController, HelloController],
  providers: [AppService, HelloService],
})
export class AppModule {}
