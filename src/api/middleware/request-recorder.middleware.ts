import { Request, Response } from 'express';
import { v4 as uuid } from 'uuid';
import { getClsNameSpace, setClsValue } from '@api/services/cls.service';

export const RequestRecorder = (req: Request, res: Response, next: Function): void => {
    const namespace = getClsNameSpace();
    namespace.run(function() {
        if (!req.headers['x-request-id']) {
            req.headers['x-request-id'] = uuid();
        }

        setClsValue('requestId', req.headers['x-request-id']);
        setClsValue('IP', req.headers['x-forwarded-for'] || req.connection.remoteAddress);
        setClsValue('path', req.originalUrl);
        setClsValue('method', req.method);
        setClsValue('reqStart', new Date());

        next();
    });
};
