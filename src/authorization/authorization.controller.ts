import { Controller, Get, Post, UseGuards, Headers } from '@nestjs/common';
import { AuthorizationService } from './authorization.service';
import { IAuthorization } from './interfaces/IAuthorization.interface';
import { AuthGuard } from '@nestjs/passport';
import { IPermissions } from './interfaces/IPermissions.interface';

@Controller('api/authorization')
export class AuthorizationController {
  constructor(private readonly authorizationService: AuthorizationService) {}

  @Get()
  findAll(): Promise<IAuthorization[]> {
    return this.authorizationService.findAll();
  }

  @Get('me')
  @UseGuards(AuthGuard('jwt'))
  findUserAuthorization(
    @Headers('authorization') bearerToken: string,
  ): Promise<IPermissions> {
    return this.authorizationService.findUserAuthorization(bearerToken);
  }
}
