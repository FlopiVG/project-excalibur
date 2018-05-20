import * as jwt from 'jsonwebtoken';
import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { Heroes } from './interfaces/heroes.interface';
import { CreateHeroDto } from './dto/create-hero.dto';

@Injectable()
export class HeroesService {
  constructor(
    @Inject('HeroesModelToken') private readonly heroesModel: Model<Heroes>,
  ) {}

  async findAll(): Promise<Heroes[]> {
    return await this.heroesModel.find();
  }

  async create(
    createHeroDto: CreateHeroDto,
    bearerToken: String,
  ): Promise<Heroes> {
    const token = bearerToken.split(' ')[1];
    const userInfo = jwt.verify(token, 'secretKey');
    const createdHero = new this.heroesModel({
      ...createHeroDto,
      user_id: userInfo._id,
    });

    return await createdHero.save();
  }
}
