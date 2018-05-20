import {
  Controller,
  Post,
  Get,
  Body,
  UseGuards,
  Headers,
  Put,
} from '@nestjs/common';
import { CreateHeroDto } from './dto/create-hero.dto';
import { Heroes } from './interfaces/heroes.interface';
import { HeroesService } from './heroes.service';
import { AuthGuard } from '@nestjs/passport';
import { UpdateHeroDto } from './dto/update-hero.dto';

@Controller('heroes')
export class HeroesController {
  constructor(private readonly heroesService: HeroesService) {}
  @Get()
  findAll(): Promise<Heroes[]> {
    return this.heroesService.findAll();
  }

  @Get('me')
  @UseGuards(AuthGuard('jwt'))
  getUserHero(@Headers('authorization') bearerToken: String): Promise<Heroes> {
    return this.heroesService.getUserHero(bearerToken);
  }

  @Post()
  @UseGuards(AuthGuard('jwt'))
  create(
    @Body() createheroDto: CreateHeroDto,
    @Headers('authorization') bearerToken: String,
  ): Promise<Heroes> {
    return this.heroesService.create(createheroDto, bearerToken);
  }

  @Put()
  @UseGuards(AuthGuard('jwt'))
  updateUserHero(
    @Body() updateHeroDto: UpdateHeroDto,
    @Headers('authorization') bearerToken: String,
  ): Promise<Heroes> {
    return this.heroesService.updateUserHero(updateHeroDto, bearerToken);
  }
}
