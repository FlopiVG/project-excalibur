import { IUsersDto } from './dto/IUsers.dto';
import Axios from '../../utils/Axios';

export class UserApi {
  fetchUsers(): Promise<IUsersDto[]> {
    return new Promise((resolve, reject) => {
      Axios({
        method: 'GET',
        url: '/api/users',
      })
        .then(res => resolve(res.data))
        .catch((error: Error) => reject(error.message));
    });
  }
}
