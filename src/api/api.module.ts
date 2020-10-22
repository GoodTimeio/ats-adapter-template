import { Module } from '@nestjs/common';
import { ApplicationController } from '@api/application/application.controller';

@Module({
    controllers: [ApplicationController],
})
export class ApiModule {}
