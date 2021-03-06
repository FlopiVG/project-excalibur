import { Schema } from 'mongoose';
import { IUserDto } from './dto/IUser.dto';
import Axios from '../../utils/Axios';
import { IUserCreate } from './interfaces/IUserCreate.interface';
import { IUserEdit } from './interfaces/IUserEdit.interface';

export class UserApi {
  fetchUsers(): Promise<IUserDto[]> {
    return new Promise((resolve, reject) => {
      Axios({
        method: 'GET',
        url: '/api/users',
      })
        .then(res => resolve(res.data))
        .catch((error: Error) => reject(error.message));
    });
  }

  createUser(userCreate: IUserCreate): Promise<IUserDto> {
    return new Promise((resolve, reject) => {
      if (!userCreate.username) return reject('Username field is required!');
      if (!userCreate.email) return reject('Email field is required!');
      if (!userCreate.password) return reject('Password field is required!');

      Axios({
        method: 'POST',
        url: '/api/users',
        data: userCreate,
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then(res => resolve(res.data))
        .catch((error: Error) => reject(error.message));
    });
  }

  editUser(userEdit: IUserEdit): Promise<IUserEdit> {
    return new Promise((resolve, reject) => {
      // Todo: create put service
      resolve(userEdit);
    });
  }

  deleteUser(_id: Schema.Types.ObjectId): Promise<IUserDto> {
    return new Promise((resolve, reject) => {
      Axios({
        method: 'DELETE',
        url: `/api/users/${_id}`,
      })
        .then(res => resolve(res.data))
        .catch((error: Error) => reject(error.message));
    });
  }
}
