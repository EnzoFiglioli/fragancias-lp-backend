import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.setGlobalPrefix('api');
  app.enableCors({
    origin: ['https://malipi.vercel.app/', 'http://localhost:5173&'],
  });
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
