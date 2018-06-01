import { IPermissions } from 'authorization/interfaces/IPermissions.interface';

export interface UserResponse {
  readonly username: string;
  readonly token: string;
  readonly permissions?: [IPermissions];
}
