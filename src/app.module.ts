import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { ExampleModule } from '@api/example/example.module';
import { LoggerModule } from 'src/logger/logger.module';
import { RequestLoggerInterceptor } from 'src/logger/request-logger.interceptor';
import { RequestRecorderMiddleware } from 'src/logger/request-recorder.middleware';

@Module({
    imports: [LoggerModule, ExampleModule],
    controllers: [],
    providers: [
        {
            provide: APP_INTERCEPTOR,
            useClass: RequestLoggerInterceptor,
        },
    ],
})
export class AppModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(RequestRecorderMiddleware).forRoutes('*');
    }
}
