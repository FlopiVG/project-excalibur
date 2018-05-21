import { NestFactory } from '@nestjs/core';
import * as next from 'next';
import { AppModule } from './app.module';

const dev = process.env.NODE_ENV !== 'production';
const port = process.env.PORT || 3000;

const nextApp = next({ dev });

export const nextHandler = nextApp.getRequestHandler();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await nextApp.prepare();
  await app.listen(port);
}

bootstrap();
