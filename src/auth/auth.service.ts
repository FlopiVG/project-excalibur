import * as jwt from 'jsonwebtoken';
import { Injectable } from '@nestjs/common';
import { UsersService } from 'users/users.service';
import { JwtPayload } from './interfaces/jwt-payload.interface';

const { SECRET } = process.env;

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService) {}

  async createToken() {
    const user: JwtPayload = {
      username: 'testop',
      _id: '5af00dc9b8f8c40b34e13528',
    };
    return jwt.sign(user, SECRET, { expiresIn: 3600 });
  }

  async validateUser(payload: JwtPayload): Promise<any> {
    return await this.usersService.findByUsername(payload.username);
  }

  async getUserInfo(bearerToken: string): Promise<JwtPayload> {
    const token = bearerToken.split(' ')[1];
    return jwt.verify(token, SECRET);
  }
}
