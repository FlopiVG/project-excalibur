import { Schema } from 'mongoose';

export interface IDeletePermissionDto {
  user_id: Schema.Types.ObjectId;
  module: string;
}
