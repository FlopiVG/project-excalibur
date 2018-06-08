import { Schema } from 'mongoose';
import { IPermissions } from '../interfaces/IPermissions.interface';

export interface IUserDetailsDto {
  _id: Schema.Types.ObjectId;
  username: string;
  token: string;
  permissions: [IPermissions];
}
