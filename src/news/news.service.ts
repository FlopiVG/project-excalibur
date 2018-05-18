import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { News } from './interfaces/news.interface';
import { CreateNewsDto } from './dto/create-news.dto';

@Injectable()
export class NewsService {
  constructor(@Inject('NewsModelToken') private readonly newsModel: Model<News>) {}

  async create(createNewDto: CreateNewsDto): Promise<News> {
    const createdNews = new this.newsModel(createNewDto);
    return await createdNews.save();
  }

  async findAll(): Promise<News[]> {
    return await this.newsModel.find().exec();
  }
}
