import { Module } from '@nestjs/common';
import { ExampleController } from '@api/controllers/example.controller';

@Module({
    controllers: [ExampleController],
})
export class ExampleModule {}
