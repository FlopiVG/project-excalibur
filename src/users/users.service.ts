import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { Users } from './interfaces/users.interface';

@Injectable()
export class UsersService {
  constructor(
    @Inject('UsersModelToken') private readonly usersModel: Model<Users>,
  ) {}

  async findAll(): Promise<Users[]> {
    return await this.usersModel.find().exec();
  }

  async findByUsername(username: string): Promise<Users> {
    return await this.usersModel.find({ username }).exec();
  }
}
