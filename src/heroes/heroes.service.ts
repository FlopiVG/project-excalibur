import * as jwt from 'jsonwebtoken';
import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { Heroes } from './interfaces/heroes.interface';
import { CreateHeroDto } from './dto/create-hero.dto';
import { UpdateHeroDto } from './dto/update-hero.dto';

const { SECRET } = process.env;

@Injectable()
export class HeroesService {
  constructor(
    @Inject('HeroesModelToken') private readonly heroesModel: Model<Heroes>,
  ) {}

  async findAll(): Promise<Heroes[]> {
    return await this.heroesModel.find();
  }

  async getUserHero(bearerToken: String): Promise<Heroes> {
    const token = bearerToken.split(' ')[1];
    const userInfo: any = jwt.verify(token, SECRET);

    return await this.heroesModel.findOne({ user_id: userInfo._id });
  }

  async create(
    createHeroDto: CreateHeroDto,
    bearerToken: String,
  ): Promise<Heroes> {
    const token = bearerToken.split(' ')[1];
    const userInfo: any = jwt.verify(token, SECRET);
    const createdHero = new this.heroesModel({
      ...createHeroDto,
      user_id: userInfo._id,
    });

    return await createdHero.save();
  }

  async updateUserHero(
    updateHeroDto: UpdateHeroDto,
    bearerToken: String,
  ): Promise<Heroes> {
    const token = bearerToken.split(' ')[1];
    const userInfo: any = jwt.verify(token, 'secretKey');

    return this.heroesModel.findOneAndUpdate(
      { user_id: userInfo._id },
      { $set: updateHeroDto },
      { new: true },
    );
  }
}
