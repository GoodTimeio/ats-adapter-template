import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ServerResponse } from 'http';
import { Logger } from 'src/logger/logger.service';

/**
 * Emits logs per request:
 * * response status code
 * * time taken to process the request
 */
@Injectable()
export class RequestLoggerInterceptor implements NestInterceptor {
    constructor(private logger: Logger) {}

    intercept(context: ExecutionContext, next: CallHandler): Observable<unknown> {
        this.logger.log({ message: 'REQUEST' });
        const now = Date.now();
        return next.handle().pipe(
            tap(() => {
                const { statusCode } = context.switchToHttp().getResponse<ServerResponse>();
                this.logger.log({ message: 'RESPONSE', rt: `${Date.now() - now}ms`, statusCode: statusCode });
            })
        );
    }
}
