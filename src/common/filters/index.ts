import { INestApplication } from '@nestjs/common';
import { HttpExceptionFilter } from './http-execption.filter';

function setupFilters(app: INestApplication) {
  app.useGlobalFilters(new HttpExceptionFilter());
}

export default setupFilters;
