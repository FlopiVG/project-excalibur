import * as jwt from 'jsonwebtoken';
import {
  Injectable,
  UnauthorizedException,
  NotFoundException,
} from '@nestjs/common';
import { UsersService } from 'users/users.service';
import { JwtPayload } from './interfaces/jwt-payload.interface';
import { LoginUserDto } from './dto/login-user.dto';
import { Users } from '../users/interfaces/users.interface';
import { UserResponse } from './interfaces/user-response.interface';
import { AuthorizationService } from 'authorization/authorization.service';

const { SECRET } = process.env;

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly authorizationService: AuthorizationService,
  ) {}

  public async createToken(user: Users): Promise<string> {
    const jwtPayload: JwtPayload = {
      username: user.username,
      _id: user._id,
    };
    return jwt.sign(jwtPayload, SECRET, { expiresIn: 3600 });
  }

  async validateUser(payload: JwtPayload): Promise<any> {
    return await this.usersService.findByUsername(payload.username);
  }

  async login(payload: LoginUserDto) {
    return new Promise((resolve, reject) => {
      this.usersService
        .findByUsername(payload.username)
        .then(async (user: Users) => {
          if (!user) return reject(new NotFoundException());
          if (!(await user.comparePassword(payload.password)))
            return reject(new UnauthorizedException());

          const authorization = await this.authorizationService.findOne(
            user._id,
          );
          return resolve({
            username: user.username,
            token: await this.createToken(user),
            permissions: authorization.permissions,
          });
        });
    });
  }

  async getUserInfo(bearerToken: string) {
    const token = bearerToken.split(' ')[1];
    const { _id, username }: any = jwt.verify(token, SECRET);
    return {
      _id,
      username,
      permissions: await this.authorizationService.findUserAuthorization(
        bearerToken,
      ),
    };
  }
}
