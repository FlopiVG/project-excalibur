import { Connection } from 'mongoose';
import { AuthorizationSchema } from './schemas/authorization.schema';

export const authorizationProviders = [
  {
    provide: 'AuthorizationModelToken',
    useFactory: (connection: Connection) =>
      connection.model('Authorizations', AuthorizationSchema),
    inject: ['DbConnectionToken'],
  },
];
