import * as jwt from 'jsonwebtoken';
import { Model, Types } from 'mongoose';
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
import { IAddPermissionDto } from './dto/IAddPermission.dto';

const { SECRET } = process.env;
const PERMISSION_WHITE_LIST: any = ['read', 'write', 'edit', 'delete'];

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

  findOne(user_id: Types.ObjectId): Promise<IAuthorization> {
    return new Promise((resolve, reject) => {
      if (!Types.ObjectId.isValid(user_id))
        return reject(new BadRequestException('Invalid user_id!'));

      this.authorizationModel
        .findOne({ user_id })
        .then(user => {
          if (!user)
            return reject(
              new NotFoundException('Not found user with id: ' + user.id),
            );
          return resolve(user);
        })
        .catch(reject);
    });
  }

  addUserPermission(
    addPermissionDto: IAddPermissionDto,
  ): Promise<IAuthorization> {
    return new Promise((resolve, reject) => {
      const { user_id, module, ...permissions } = addPermissionDto;
      if (!user_id)
        return reject(new BadRequestException('Need user_id parameter!.'));
      if (!module)
        return reject(new BadRequestException('Need module parameter!.'));

      const create = {
        module,
      };

      for (let key in permissions) {
        if (!PERMISSION_WHITE_LIST.includes(key))
          return reject(new BadRequestException(`Invalid ${key} permission!`));
        create[key] = permissions[key];
      }

      this.authorizationModel
        .findOneAndUpdate(
          { user_id, 'permissions.module': { $ne: module } },
          { $push: { permissions: create } },
          { new: true },
        )
        .then(data => {
          if (data) return resolve(data);
          else
            return reject(
              new NotFoundException(
                'User not found or permission is already created.!!',
              ),
            );
        })
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

      const update = {
        'permissions.$.module': module,
      };

      for (let key in permissions) {
        if (!PERMISSION_WHITE_LIST.includes(key))
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
