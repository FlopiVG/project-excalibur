import * as jwt from 'jsonwebtoken';
import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { IAuthorization } from './interfaces/IAuthorization.interface';
import { IPermissions } from './interfaces/IPermissions.interface';

const { SECRET } = process.env;

@Injectable()
export class AuthorizationService {
  constructor(
    @Inject('AuthorizationModelToken')
    private readonly authorizationModel: Model<IAuthorization>,
  ) {}

  findAll(): Promise<IAuthorization[]> {
    return new Promise((resolve, reject) => {
      this.authorizationModel
        .find()
        .then(resolve)
        .catch(reject);
    });
  }

  findUserAuthorization(bearerToken: string): Promise<IPermissions> {
    return new Promise((resolve, reject) => {
      const token = bearerToken.split(' ')[1];
      const userInfo: any = jwt.verify(token, SECRET);

      this.authorizationModel
        .findOne({ user_id: userInfo._id })
        .then(data => resolve(data.permissions))
        .catch(reject);
    });
  }
}
