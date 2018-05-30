import {
  Controller,
  Get,
  Post,
  UseGuards,
  Headers,
  Body,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';
import { JwtPayload } from './interfaces/jwt-payload.interface';
import { LoginUserDto } from './dto/login-user.dto';
import { UserResponse } from './interfaces/user-response.interface';

@Controller('api/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('data')
  @UseGuards(AuthGuard('jwt'))
  getSecureData(): string {
    return 'Its secure!';
  }

  @Post('login')
  async login(@Body() loginUserDto: LoginUserDto) {
    return this.authService.login(loginUserDto);
  }

  @Get('whoami')
  @UseGuards(AuthGuard('jwt'))
  async whoAmi(@Headers() headers) {
    return this.authService.getUserInfo(headers.authorization);
  }
}
