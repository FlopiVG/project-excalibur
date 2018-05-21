import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { NewsService } from './news.service';
import { News } from './interfaces/news.interface';
import { CreateNewsDto } from './dto/create-news.dto';

@Controller('api/news')
export class NewsController {
  constructor(private readonly newsService: NewsService) {}

  @Post()
  async create(@Body() createNewsDto: CreateNewsDto) {
    this.newsService.create(createNewsDto);
  }

  @Get()
  async findAll(): Promise<News[]> {
    return this.newsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id): String {
    return `This action returns a ${id} news.`;
  }

  @Put(':id')
  update(@Param('id') id): String {
    return `This action update a ${id} news.`;
  }

  @Delete(':id')
  remove(@Param('id') id): String {
    return `This action remove a ${id} news.`;
  }
}
