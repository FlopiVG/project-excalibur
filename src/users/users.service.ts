import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { Users } from './interfaces/users.interface';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @Inject('UsersModelToken') private readonly usersModel: Model<Users>,
  ) {}

  async findAll(): Promise<Users[]> {
    return await this.usersModel.find().exec();
  }

  async findByUsername(username: string): Promise<Users> {
    return await this.usersModel.findOne({ username });
  }

  async createUser(user: CreateUserDto): Promise<Users> {
    return await new this.usersModel(user).save();
  }

  async deleteUser(id: String): Promise<Users> {
    return await this.usersModel.findByIdAndRemove(id);
  }
}
