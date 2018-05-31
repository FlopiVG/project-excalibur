import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { IAuthorization } from './interfaces/IAuthorization.interface';

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
}
