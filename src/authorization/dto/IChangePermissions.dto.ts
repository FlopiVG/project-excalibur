import { Schema } from 'mongoose';

export interface IChangePermissionsDto {
  user_id: Schema.Types.ObjectId;
  module: string;
  write?: boolean;
  read?: boolean;
  edit?: boolean;
  delete?: boolean;
}
