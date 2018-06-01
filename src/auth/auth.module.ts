import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersModule } from 'users/users.module';
import { JwtStrategy } from './jwt.strategy';
import { AuthController } from './auth.controller';
import { AuthorizationModule } from 'authorization/authorization.module';

@Module({
  providers: [AuthService, JwtStrategy],
  imports: [UsersModule, AuthorizationModule],
  controllers: [AuthController],
})
export class AuthModule {}
