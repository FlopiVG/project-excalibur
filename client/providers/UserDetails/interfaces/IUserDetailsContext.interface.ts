import { ILoginPayload } from './ILoginPayload.interface';
import { IPermissions } from './IPermissions.interface';

export interface IUserDetailsContext {
  token: string;
  username: string;
  loginLoading: boolean;
  loginError: string;
  login: (data: ILoginPayload) => void;
  logout: () => void;
  logoutLoading: boolean;
  permissions: IPermissions[];
}
