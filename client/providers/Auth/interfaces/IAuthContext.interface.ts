import { ILoginPayload } from './login-payload.interface';
import { IPermissions } from './IPermissions.interface';

export interface IAuthContext {
  token: string;
  username: string;
  loginLoading: boolean;
  loginError: string;
  login?: (data: ILoginPayload) => void;
  logout?: () => void;
  logoutLoading?: boolean;
  permissions?: [IPermissions];
}
