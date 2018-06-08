import { Schema } from 'mongoose';

export interface IUserDto {
  _id: Schema.Types.ObjectId;
  username: string;
  password: string;
  email: string;
}
