import { LoggerService } from '@nestjs/common';
import log, { init } from '@goodtimeio/node-logger';
import { getClsValue } from '@api/services/cls.service';

/*
    Setup our Goodtime node logger instance here as well as wrap the node logger's function in the NestJs functions so that we can use our logger instead of the default Nest Logger
 */
export class Logger implements LoggerService {
    constructor() {
        //setup application logger
        init({
            environment: process.env.NODE_ENV === 'production' ? 'prod' : 'dev',
            name: 'goodtime-node-template',
            additionalInfo: () => {
                const extras: Record<string, unknown> = {};
                extras.requestId = getClsValue('requestId');
                extras.ip = getClsValue('IP');
                extras.path = getClsValue('path');
                extras.method = getClsValue('method');
                extras.reqStart = getClsValue('reqStart');

                // Goodtime specific values based on request
                extras.org = getClsValue('orgDomain');
                extras.userId = getClsValue('userId');

                // GoodTime employee using Service Session
                extras.gtUser = getClsValue('gtUser');
                extras.gtUser = getClsValue('gtUserId');
                extras.apiKeyId = getClsValue('apiKeyId');

                return extras;
            },
        });
    }
    log(message: string, context: string) {
        log.info(message, { context: context });
    }
    error(message: string, trace: string) {
        log.error(message, trace);
    }
    warn(message: string, context: string) {
        log.warn(message, { context: context });
    }
    debug(message: string, context: string) {
        log.debug(message, { context: context });
    }
    verbose(message: string, context: string) {
        log.verbose(message, { context: context });
    }
}
