import { Schema } from 'mongoose';
import { IUserDto } from '../dto/IUser.dto';
import { IUserCreate } from './IUserCreate.interface';
import { IUserEdit } from './IUserEdit.interface';

export interface IUsersContext {
  users: IUserDto[];
  fetchUsersLoading: boolean;
  fetchUsersError: string;
  createUser: (data: IUserCreate) => void;
  createUserLoading: boolean;
  createUserError: string;
  deleteUser: (_id: Schema.Types.ObjectId) => void;
  deleteUserLoading: boolean;
  deleteUserError: string;
  editUser: (data: IUserEdit) => void;
  editUserLoading: boolean;
  editUserError: string;
}
