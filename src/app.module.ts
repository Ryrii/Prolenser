import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HelloController } from './hello/hello.controller';
import { HelloService } from './hello/hello.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost:27017/prolenser'), UsersModule],
  controllers: [AppController, HelloController],
  providers: [AppService, HelloService],
})
export class AppModule {}
