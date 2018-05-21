import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersModule } from 'users/users.module';
import { JwtStrategy } from './jwt.strategy';
import { AuthController } from './auth.controller';

@Module({
  providers: [AuthService, JwtStrategy],
  imports: [UsersModule],
  controllers: [AuthController],
})
export class AuthModule {}
