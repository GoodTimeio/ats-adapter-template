import { Injectable, LoggerService } from '@nestjs/common';
import log, { init } from '@goodtimeio/node-logger';
import { ClsService } from 'src/core/cls.service';

/**
 * Provides access to logger.
 *
 * Currently, a GoodTime-specific winston-wrapper is used to emit logs.
 */
@Injectable()
export class Logger implements LoggerService {
    constructor(private cls: ClsService) {
        //setup application logger
        init({
            environment: process.env.NODE_ENV === 'production' ? 'prod' : 'dev',
            name: 'goodtime-node-template',
            additionalInfo: () => {
                const extras: Record<string, unknown> = {};
                extras.requestId = cls.getClsValue('requestId');
                extras.ip = cls.getClsValue('IP');
                extras.path = cls.getClsValue('path');
                extras.method = cls.getClsValue('method');
                extras.reqStart = cls.getClsValue('reqStart');
                return extras;
            },
        });
    }
    log(emit: string | ({ message: string } & { [rest: string]: unknown }), context?: string) {
        log.log({
            level: 'info',
            ...(typeof emit === 'string' ? { message: emit } : emit),
            context,
        });
    }
    error(emit: string | ({ message: string } & { [rest: string]: unknown }), trace?: string, context?: string) {
        log.log({
            level: 'error',
            ...(typeof emit === 'string' ? { message: emit } : emit),
            context,
            stack: trace,
        });
    }
    warn(emit: string | ({ message: string } & { [rest: string]: unknown }), context?: string) {
        log.log({
            level: 'warn',
            ...(typeof emit === 'string' ? { message: emit } : emit),
            context,
        });
    }
    debug(emit: string | ({ message: string } & { [rest: string]: unknown }), context?: string) {
        log.log({
            level: 'debug',
            ...(typeof emit === 'string' ? { message: emit } : emit),
            context,
        });
    }
    verbose(emit: string | ({ message: string } & { [rest: string]: unknown }), context?: string) {
        log.log({
            level: 'verbose',
            ...(typeof emit === 'string' ? { message: emit } : emit),
            context,
        });
    }
}
