import Axios from 'axios';
import { LoginPayload } from './interfaces/login-payload.interface';
import { loginDto } from './dto/login.dto';

export class AuthApi {
  login(loginPayload: LoginPayload): Promise<loginDto> {
    return new Promise((resolve, reject) => {
      Axios({
        method: 'POST',
        data: loginPayload,
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then(res => resolve(res.data))
        .catch(reject);
    });
  }
}
