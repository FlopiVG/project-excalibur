import { Module } from '@nestjs/common';
import { heroesProviders } from './heroes.providers';
import { DatabaseModule } from 'database/database.module';
import { HeroesController } from './heroes.controller';
import { HeroesService } from './heroes.service';

@Module({
  imports: [DatabaseModule],
  providers: [...heroesProviders, HeroesService],
  controllers: [HeroesController],
})
export class HeroesModule {}
