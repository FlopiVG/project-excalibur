import { IUsersDto } from '../dto/IUsers.dto';

export interface IUsersContext {
  users: IUsersDto[];
  fetchUsersLoading: boolean;
  fetchUsersError: string;
}
