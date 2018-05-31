import { Controller, Get, Post } from '@nestjs/common';
import { AuthorizationService } from './authorization.service';
import { IAuthorization } from './interfaces/IAuthorization.interface';

@Controller('api/authorization')
export class AuthorizationController {
  constructor(private readonly authorizationService: AuthorizationService) {}

  @Get()
  findAll(): Promise<IAuthorization[]> {
    return this.authorizationService.findAll();
  }
}
