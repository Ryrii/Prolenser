import { Injectable } from '@nestjs/common';
import { User, UserSchema } from '../schemas/user.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';


@Injectable()
export class UsersService {
    constructor(@InjectModel(User.name) private readonly userModel: Model<User>) {}

    async create(body): Promise<any>{
        return this.userModel.create(body);

    }
    async findAll(): Promise<User[]> {
        return this.userModel.find().exec();
    }
    async findOne(id: string): Promise<User> {
        return this.userModel.findOne({ _id: id }).exec();
    }

    async update(id: string, update: Partial<User>): Promise<User> {
        const result = await this.userModel.findByIdAndUpdate(id, update, { new: true });
        return result.toObject();
    }
}
