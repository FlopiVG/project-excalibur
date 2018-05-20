import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NewsModule } from 'news/news.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { HeroModule } from './hero/hero.module';

@Module({
  imports: [NewsModule, UsersModule, AuthModule, HeroModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
