import { Request, Response } from 'express';
import { Injectable, NestMiddleware } from '@nestjs/common';
import { ClsService } from 'src/core/cls.service';
import { v4 as uuid } from 'uuid';

/**
 * Records request specific data (ex: ip, path, method) inside a cls context.
 *
 * The Logger emits these fields in every log.
 *
 * @see logger.service.ts
 */
@Injectable()
export class RequestRecorderMiddleware implements NestMiddleware {
    constructor(private cls: ClsService) {}

    use(req: Request, res: Response, next: () => void) {
        this.cls.getNamespace().run(() => {
            req.headers['x-request-id'] = req.headers['x-request-id'] ?? uuid();

            this.cls.setClsValue('requestId', req.headers['x-request-id']);
            this.cls.setClsValue('IP', req.headers['x-forwarded-for'] || req.connection.remoteAddress);
            this.cls.setClsValue('path', req.originalUrl);
            this.cls.setClsValue('method', req.method);
            this.cls.setClsValue('reqStart', new Date());

            next();
        });
    }
}
