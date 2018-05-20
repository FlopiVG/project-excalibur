import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { Heroes } from './interfaces/heroes.interface';
import { CreateHeroDto } from './dto/create-hero.dto';

@Injectable()
export class HeroesService {
  constructor(
    @Inject('HeroesModelToken') private readonly heroesModel: Model<Heroes>,
  ) {}

  async create(createHeroDto: CreateHeroDto): Promise<Heroes> {
    return await new this.heroesModel(createHeroDto).save();
  }
}
