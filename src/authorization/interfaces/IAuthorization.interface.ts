import { Schema } from 'mongoose';
import { IPermissions } from './IPermissions.interface';

export interface IAuthorization {
  user_id: Schema.Types.ObjectId;
  permissions: [IPermissions];
}
