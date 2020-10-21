import { Module } from '@nestjs/common';
import { Logger } from 'src/logger/logger.service';
import { ClsService } from 'src/logger/cls/cls.service';
import { RequestLoggerInterceptor } from 'src/logger/request-logger.interceptor';
import { RequestRecorderMiddleware } from 'src/logger/request-recorder.middleware';

@Module({
    providers: [ClsService, Logger, RequestLoggerInterceptor, RequestRecorderMiddleware],
    exports: [ClsService, Logger, RequestLoggerInterceptor, RequestRecorderMiddleware],
})
export class LoggerModule {}
