import { IUserDto } from '../dto/IUser.dto';
import { IUserCreate } from './IUserCreate.interface';

export interface IUsersContext {
  users: IUserDto[];
  fetchUsersLoading: boolean;
  fetchUsersError: string;
  createUser: (data: IUserCreate) => void;
  createUserLoading: boolean;
  createUserError: string;
}
