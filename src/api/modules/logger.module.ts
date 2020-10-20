import { Module } from '@nestjs/common';
import { Logger } from '@api/logger/logger';

@Module({
    providers: [Logger],
    exports: [Logger],
})
export class LoggerModule {}
