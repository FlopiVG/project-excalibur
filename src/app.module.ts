import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NewsModule } from 'news/news.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { HeroesModule } from './heroes/heroes.module';

@Module({
  imports: [NewsModule, UsersModule, AuthModule, HeroesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
