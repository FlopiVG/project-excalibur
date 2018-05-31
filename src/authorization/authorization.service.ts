import * as jwt from 'jsonwebtoken';
import { Model } from 'mongoose';
import {
  Injectable,
  Inject,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { IAuthorization } from './interfaces/IAuthorization.interface';
import { IPermissions } from './interfaces/IPermissions.interface';
import { IChangePermissionsDto } from './dto/IChangePermissions.dto';
import { IDeletePermissionDto } from './dto/IDeletePermission.dto';

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

  updateUserPermissions(
    changePermissionsDto: IChangePermissionsDto,
  ): Promise<IAuthorization> {
    return new Promise(async (resolve, reject) => {
      const { user_id, module, ...permissions } = changePermissionsDto;

      if (!user_id)
        return reject(new BadRequestException('Need user_id parameter!.'));
      if (!module)
        return reject(new BadRequestException('Need module parameter!.'));

      const permissionWhiteList: any = ['read', 'write', 'edit', 'delete'];
      const update = {
        'permissions.$.module': module,
      };

      for (let key in permissions) {
        if (!permissionWhiteList.includes(key))
          return reject(new BadRequestException(`Invalid ${key} permission!`));
        update[`permissions.$.${key}`] = permissions[key];
      }

      this.authorizationModel
        .findOneAndUpdate(
          { user_id, 'permissions.module': module },
          { $set: update },
          { new: true },
        )
        .then(resolve)
        .catch(reject);
    });
  }

  deleteUserPermission(
    changePermissionsDto: IDeletePermissionDto,
  ): Promise<IAuthorization> {
    return new Promise((resolve, reject) => {
      const { module, user_id } = changePermissionsDto;

      if (!user_id)
        return reject(new BadRequestException('Need user_id parameter!.'));
      if (!module)
        return reject(new BadRequestException('Need module parameter!.'));

      this.authorizationModel
        .findOneAndUpdate(
          {
            user_id,
            'permissions.module': module,
          },
          { $pull: { permissions: { module } } },
          { new: true },
        )
        .then(data => {
          if (data) return resolve(data);
          else
            return reject(
              new NotFoundException('User id or module not found!'),
            );
        })
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
