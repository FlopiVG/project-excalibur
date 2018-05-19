import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { Users } from './interfaces/users.interface';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get()
  async findAll(): Promise<Users[]> {
    return this.userService.findAll();
  }

  @Post()
  async create(@Body() payload: CreateUserDto): Promise<Users> {
    return this.userService.createUser(payload);
  }

  @Delete(':id')
  async delete(@Param('id') id: String): Promise<Users> {
    return this.userService.deleteUser(id);
  }
}
