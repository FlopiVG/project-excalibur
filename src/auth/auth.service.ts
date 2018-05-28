import * as jwt from 'jsonwebtoken';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'users/users.service';
import { JwtPayload } from './interfaces/jwt-payload.interface';
import { LoginUserDto } from './dto/login-user.dto';
import { Users } from '../users/interfaces/users.interface';
import { UserResponse } from './interfaces/user-response.interface';

const { SECRET } = process.env;

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService) {}

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
    const user: Users = await this.usersService.findByUsername(
      payload.username,
    );

    if (user && (await user.comparePassword(payload.password))) {
      const token: string = await this.createToken(user);
      return {
        username: user.username,
        token,
      };
    } else {
      return new UnauthorizedException();
    }
  }

  getUserInfo(bearerToken: string) {
    const token = bearerToken.split(' ')[1];
    return jwt.verify(token, SECRET);
  }
}
