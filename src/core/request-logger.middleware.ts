import { Injectable, NestMiddleware, ExecutionContext, CallHandler } from '@nestjs/common';
import { Request, Response } from 'express';
import { fromEvent } from 'rxjs';
import { Logger } from 'src/core/logger.service';

/**
 * Emits logs per request:
 * * response status code
 * * time taken to process the request
 */
@Injectable()
export class RequestLoggerMiddleware implements NestMiddleware {
    constructor(private logger: Logger) {}

    use(req: Request, res: Response, next: () => void) {
        this.logger.log({ message: 'REQUEST' });
        const now = Date.now();

        fromEvent(res, 'finish').subscribe(() => {
            this.logger.log({
                message: 'RESPONSE',
                statusCode: res.statusCode,
                statusMessage: res.statusMessage,
                responseTime: `${Date.now() - now}ms`,
            });
        });
        next();
    }
}
