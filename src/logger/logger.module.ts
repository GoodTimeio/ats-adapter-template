import { Module } from '@nestjs/common';
import { Logger } from 'src/logger/logger.service';
import { ClsService } from 'src/logger/cls/cls.service';
import { RequestLoggerMiddleware } from 'src/logger/request-logger.middleware';
import { RequestRecorderMiddleware } from 'src/logger/request-recorder.middleware';

@Module({
    providers: [ClsService, Logger, RequestLoggerMiddleware, RequestRecorderMiddleware],
    exports: [ClsService, Logger, RequestLoggerMiddleware, RequestRecorderMiddleware],
})
export class LoggerModule {}
