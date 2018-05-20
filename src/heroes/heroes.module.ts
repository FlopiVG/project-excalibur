import { Module } from '@nestjs/common';
import { heroesProviders } from './heroes.providers';
import { DatabaseModule } from 'database/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [...heroesProviders],
})
export class HeroesModule {}
