import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import log from '@goodtimeio/node-logger';

@Injectable()
export class RequestLoggerInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler): Observable<unknown> {
        log.info('msg="REQUEST"');
        const now = Date.now();
        const { statusCode } = context.switchToHttp().getResponse();
        return next
            .handle()
            .pipe(tap(() => log.info('msg="RESPONSE"', { rt: `${Date.now() - now}ms`, statusCode: statusCode })));
    }
}
