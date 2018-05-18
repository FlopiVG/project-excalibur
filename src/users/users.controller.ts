import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';
import { Users } from './interfaces/users.interface';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get()
  async findAll(): Promise<Users[]> {
    return this.userService.findAll();
  }
}
