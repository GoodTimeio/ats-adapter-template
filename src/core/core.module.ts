import { Module } from '@nestjs/common';
import { Logger } from 'src/core/logger.service';
import { ClsService } from 'src/core/cls.service';
import { RequestLoggerMiddleware } from 'src/core/request-logger.middleware';
import { RequestRecorderMiddleware } from 'src/core/request-recorder.middleware';
import { ResponseFieldsInterceptor } from 'src/core/response-fields.interceptor';
import { AllExceptionsFilter } from 'src/core/all-exception.filter';

@Module({
    providers: [
        ClsService,
        Logger,
        RequestLoggerMiddleware,
        RequestRecorderMiddleware,
        ResponseFieldsInterceptor,
        AllExceptionsFilter,
    ],
    exports: [
        ClsService,
        Logger,
        RequestLoggerMiddleware,
        RequestRecorderMiddleware,
        ResponseFieldsInterceptor,
        AllExceptionsFilter,
    ],
})
export class CoreModule {}
