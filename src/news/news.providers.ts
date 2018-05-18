import { Connection } from 'mongoose';
import { NewsSchema } from './schemas/news.schemas';

export const newsProviders = [
  {
    provide: 'NewsModelToken',
    useFactory: (connection: Connection) =>
      connection.model('News', NewsSchema),
    inject: ['DbConnectionToken'],
  },
];
