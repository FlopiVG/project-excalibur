import * as mongoose from 'mongoose';

export const databaseProviders = [
  {
    provide: 'DbConnectionToken',
    useFactory: async (): Promise<typeof mongoose> =>
      await mongoose.connect(
        'mongodb://testop:testop@ds155699.mlab.com:55699/proyect-excalibur',
      ),
  },
];
