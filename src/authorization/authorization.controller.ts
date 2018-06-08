import {
  Controller,
  Get,
  Post,
  UseGuards,
  Headers,
  Put,
  Body,
  Delete,
  Param,
} from '@nestjs/common';
import { AuthorizationService } from './authorization.service';
import { IAuthorization } from './interfaces/IAuthorization.interface';
import { AuthGuard } from '@nestjs/passport';
import { IPermissions } from './interfaces/IPermissions.interface';
import { IChangePermissionsDto } from './dto/IChangePermissions.dto';
import { IDeletePermissionDto } from './dto/IDeletePermission.dto';
import { IAddPermissionDto } from './dto/IAddPermission.dto';
import { Schema } from 'mongoose';

@Controller('api/authorization')
export class AuthorizationController {
  constructor(private readonly authorizationService: AuthorizationService) {}

  @Get()
  findAll(): Promise<IAuthorization[]> {
    return this.authorizationService.findAll();
  }

  @Get(':user_id')
  findOne(
    @Param('user_id') user_id: Schema.Types.ObjectId,
  ): Promise<IAuthorization> {
    return this.authorizationService.findOne(user_id);
  }

  @Post('add')
  addUserPermission(
    @Body() addPermissionDto: IAddPermissionDto,
  ): Promise<IAuthorization> {
    return this.authorizationService.addUserPermission(addPermissionDto);
  }

  @Put()
  updateUserPermissions(
    @Body() changePermissionsDto: IChangePermissionsDto,
  ): Promise<IAuthorization> {
    return this.authorizationService.updateUserPermissions(
      changePermissionsDto,
    );
  }

  @Delete()
  deleteUserPermission(
    @Body() deletePermissionDto: IDeletePermissionDto,
  ): Promise<IAuthorization> {
    return this.authorizationService.deleteUserPermission(deletePermissionDto);
  }

  @Get('me')
  @UseGuards(AuthGuard('jwt'))
  findUserAuthorization(
    @Headers('authorization') bearerToken: string,
  ): Promise<IPermissions> {
    return this.authorizationService.findUserAuthorization(bearerToken);
  }
}
