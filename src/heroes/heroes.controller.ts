import { Controller, Post, Body } from '@nestjs/common';
import { CreateHeroDto } from './dto/create-hero.dto';
import { Heroes } from './interfaces/heroes.interface';
import { HeroesService } from './heroes.service';

@Controller('heroes')
export class HeroesController {
  constructor(private readonly heroesService: HeroesService) {}
  @Post()
  create(@Body() createheroDto: CreateHeroDto): Promise<Heroes> {
    return this.heroesService.create(createheroDto);
  }
}
