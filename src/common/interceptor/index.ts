import { INestApplication } from '@nestjs/common';
import { TransformInterceptor } from './transform.interceptor';
import { LoggingInterceptor } from './logging.interceptor';

function setupInterceptors(app: INestApplication) {
  app.useGlobalInterceptors(new TransformInterceptor());
  app.useGlobalInterceptors(new LoggingInterceptor());
}

export default setupInterceptors;
