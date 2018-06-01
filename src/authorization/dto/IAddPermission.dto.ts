import { Schema } from 'mongoose';

export interface IAddPermissionDto {
  user_id: Schema.Types.ObjectId;
  module: string;
  write?: boolean;
  read?: boolean;
  edit?: boolean;
  delete?: boolean;
}
