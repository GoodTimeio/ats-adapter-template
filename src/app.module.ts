import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ExampleModule } from '@api/example/example.module';
import { LoggerModule } from 'src/logger/logger.module';
import { RequestLoggerMiddleware } from 'src/logger/request-logger.middleware';
import { RequestRecorderMiddleware } from 'src/logger/request-recorder.middleware';

@Module({
    imports: [LoggerModule, ExampleModule],
    controllers: [],
    providers: [],
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
