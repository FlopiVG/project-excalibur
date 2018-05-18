import { Connection } from 'mongoose';
import { UsersSchema } from './schemas/users.schema';

export const usersProviders = [
  {
    provide: 'UsersModelToken',
    useFactory: (connection: Connection) =>
      connection.model('Users', UsersSchema),
    inject: ['DbConnectionToken'],
  },
];
