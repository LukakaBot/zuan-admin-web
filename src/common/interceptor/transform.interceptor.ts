import {
  HttpStatus,
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  BadGatewayException,
} from '@nestjs/common';
import { Observable, map, catchError, throwError } from 'rxjs';

export interface IResponseData<T> {
  code: HttpStatus;
  message: string;
  data?: T | null;
}

@Injectable()
export class TransformInterceptor<T>
  implements NestInterceptor<T, IResponseData<T>> {
  intercept(
    _context: ExecutionContext,
    next: CallHandler,
  ): Observable<IResponseData<T>> {
    return next.handle().pipe(
      map<T, IResponseData<T>>((data) => ({
        code: HttpStatus.OK,
        message: 'success',
        data,
      })),
    );
  }
}

@Injectable()
export class ErrorsInterceptor implements NestInterceptor {
  intercept(
    _context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> | Promise<Observable<any>> {
    return next
      .handle()
      .pipe(catchError(() => throwError(() => new BadGatewayException())));
  }
}
