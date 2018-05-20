import {
  Controller,
  Post,
  Get,
  Body,
  UseGuards,
  Headers,
} from '@nestjs/common';
import { CreateHeroDto } from './dto/create-hero.dto';
import { Heroes } from './interfaces/heroes.interface';
import { HeroesService } from './heroes.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('heroes')
export class HeroesController {
  constructor(private readonly heroesService: HeroesService) {}
  @Get()
  findAll(): Promise<Heroes[]> {
    return this.heroesService.findAll();
  }

  @Post()
  @UseGuards(AuthGuard('jwt'))
  create(
    @Body() createheroDto: CreateHeroDto,
    @Headers('authorization') bearerToken: String,
  ): Promise<Heroes> {
    return this.heroesService.create(createheroDto, bearerToken);
  }
}
