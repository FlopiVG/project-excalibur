import Axios from '../../utils/Axios';
import { ILoginPayload } from './interfaces/ILoginPayload.interface';
import { IUserDetailsDto } from './dto/IUserDetails.dto';

export class UserDetailsApi {
  login(loginPayload: ILoginPayload): Promise<IUserDetailsDto> {
    return new Promise((resolve, reject) => {
      if (!loginPayload.password) return reject('You must insert a password.');
      if (!loginPayload.username) return reject('You must insert a username.');

      Axios({
        method: 'POST',
        data: loginPayload,
        url: '/api/auth/login',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then(res => {
          sessionStorage.setItem('token', res.data.token);
          resolve(res.data);
        })
        .catch((error: Error) => reject(error.message));
    });
  }

  logout(): Promise<void> {
    return new Promise(resolve => {
      sessionStorage.removeItem('token');
      resolve();
    });
  }

  whoAmi(): Promise<IUserDetailsDto> {
    return new Promise((resolve, reject) => {
      const token = sessionStorage.getItem('token');
      if (!token) return reject('No token.');
      Axios({
        method: 'GET',
        url: '/api/auth/whoami',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then(res => resolve(res.data))
        .catch((error: Error) => {
          sessionStorage.removeItem('token');
          reject(error.message);
        });
    });
  }
}
