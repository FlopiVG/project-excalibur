import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { NewsController } from './news.controller';
import { NewsService } from './news.service';
import { NewsSchema } from './schemas/news.schemas';
import { DatabaseModule } from '../database/database.module';
import { newsProviders } from './news.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [NewsController],
  providers: [NewsService, ...newsProviders],
})
export class NewsModule {}
