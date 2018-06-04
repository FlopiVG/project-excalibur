import { IUserCreate } from '../../../providers/Users/interfaces/IUserCreate.interface';

export interface ICreateUserProps {
  createUserLoading: boolean;
  createUserError: string;
  createUser: (data: IUserCreate) => void;
}
