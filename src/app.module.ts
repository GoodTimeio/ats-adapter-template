import { MiddlewareConsumer, Module, NestModule, ValidationPipe } from '@nestjs/common';
import { APP_FILTER, APP_INTERCEPTOR, APP_PIPE } from '@nestjs/core';
import { ApiModule } from '@api/api.module';
import { CoreModule } from 'src/core/core.module';
import { RequestLoggerMiddleware } from 'src/core/request-logger.middleware';
import { RequestRecorderMiddleware } from 'src/core/request-recorder.middleware';
import { ResponseFieldsInterceptor } from 'src/core/response-fields.interceptor';
import { AllExceptionsFilter } from 'src/core/all-exception.filter';

@Module({
    imports: [CoreModule, ApiModule],
    controllers: [],
    providers: [
        {
            provide: APP_PIPE,
            useFactory: () => new ValidationPipe({ transform: true }),
        },
        {
            provide: APP_INTERCEPTOR,
            useClass: ResponseFieldsInterceptor,
        },
        {
            provide: APP_FILTER,
            useClass: AllExceptionsFilter,
        },
    ],
})
export class AppModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer
            .apply(RequestRecorderMiddleware)
            .forRoutes('*')
            .apply(RequestLoggerMiddleware)
            .forRoutes('*');
    }
}
