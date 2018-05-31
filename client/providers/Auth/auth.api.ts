import Axios from 'axios';
import { ILoginPayload } from './interfaces/login-payload.interface';
import { loginDto } from './dto/login.dto';

export class AuthApi {
  login(loginPayload: ILoginPayload): Promise<loginDto> {
    return new Promise((resolve, reject) => {
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
}
