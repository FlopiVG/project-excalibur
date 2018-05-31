import {
  Controller,
  Get,
  Post,
  UseGuards,
  Headers,
  Put,
  Body,
  Delete,
} from '@nestjs/common';
import { AuthorizationService } from './authorization.service';
import { IAuthorization } from './interfaces/IAuthorization.interface';
import { AuthGuard } from '@nestjs/passport';
import { IPermissions } from './interfaces/IPermissions.interface';
import { IChangePermissionsDto } from './dto/IChangePermissions.dto';
import { IDeletePermissionDto } from './dto/IDeletePermission.dto';

@Controller('api/authorization')
export class AuthorizationController {
  constructor(private readonly authorizationService: AuthorizationService) {}

  @Get()
  findAll(): Promise<IAuthorization[]> {
    return this.authorizationService.findAll();
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
