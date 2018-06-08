import { Module } from '@nestjs/common';
import { AuthorizationController } from './authorization.controller';
import { AuthorizationService } from './authorization.service';
import { DatabaseModule } from 'database/database.module';
import { authorizationProviders } from './authorization.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [AuthorizationController],
  providers: [...authorizationProviders, AuthorizationService],
  exports: [AuthorizationService],
})
export class AuthorizationModule {}
