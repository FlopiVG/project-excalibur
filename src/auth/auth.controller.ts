import { Controller, Get, UseGuards, Headers } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';
import { JwtPayload } from './interfaces/jwt-payload.interface';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('token')
  async createToken(): Promise<any> {
    return this.authService.createToken();
  }

  @Get('data')
  @UseGuards(AuthGuard('jwt'))
  getSecureData(): string {
    return 'Its secure!';
  }

  @Get('whoami')
  @UseGuards(AuthGuard('jwt'))
  async whoAmi(@Headers() headers): Promise<JwtPayload> {
    return this.authService.getUserInfo(headers.authorization);
  }
}
