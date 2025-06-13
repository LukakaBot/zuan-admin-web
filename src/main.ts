import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import setupInterceptors from './common/interceptor';
import setupFilters from './common/filters';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  setupInterceptors(app);
  setupFilters(app);

  await app.listen(process.env.PORT ?? 3000);
}

bootstrap();
