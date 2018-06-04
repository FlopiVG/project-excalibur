import { Schema } from 'mongoose';

export interface IUsersDto {
  _id: Schema.Types.ObjectId;
  username: string;
  password: string;
  email: string;
}
