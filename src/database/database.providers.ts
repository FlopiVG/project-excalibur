import * as mongoose from 'mongoose';

const { MONGO_URI } = process.env

export const databaseProviders = [
  {
    provide: 'DbConnectionToken',
    useFactory: async (): Promise<typeof mongoose> =>
      await mongoose.connect(MONGO_URI),
  },
];
