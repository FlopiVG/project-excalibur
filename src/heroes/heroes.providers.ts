import { Connection } from 'mongoose';
import { HeroesSchema } from './schemas/heroes.schema';

export const heroesProviders = [
  {
    provide: 'HeroesModelToken',
    useFactory: (connection: Connection) =>
      connection.model('Heroes', HeroesSchema),
    inject: ['DbConnectionToken'],
  },
];
