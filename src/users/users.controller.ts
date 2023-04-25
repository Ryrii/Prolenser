import { Body, Controller, Delete, Get, Param, Post,Put } from '@nestjs/common';
import { UsersService } from './users.service.js';
import { User } from '../schemas/user.schema';


@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Post('create')
    async create(@Body() body): Promise<any> {
      return this.usersService.create(body);
    }

    @Get()
    async findAll(): Promise<User[]> {
      return this.usersService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: string): Promise<User> {
      return this.usersService.findOne(id);
    }

    @Put(':id')
    async updateOne(@Param('id') id: string, @Body() update: Partial<User>): Promise<any> {
      return this.usersService.update(id,update);
    }

}
