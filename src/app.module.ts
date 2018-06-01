import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { NewsModule } from 'news/news.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { HeroesModule } from './heroes/heroes.module';
import { AuthorizationModule } from './authorization/authorization.module';

@Module({
  imports: [NewsModule, UsersModule, AuthModule, HeroesModule, AuthorizationModule],
  controllers: [AppController],
})
export class AppModule {}
