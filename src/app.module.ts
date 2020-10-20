import { Module } from '@nestjs/common';
import { ExampleModule } from '@api/modules/example.module';
import { LoggerModule } from '@api/modules/logger.module';

@Module({
    imports: [ExampleModule, LoggerModule],
    controllers: [],
    providers: [],
})
export class AppModule {}
