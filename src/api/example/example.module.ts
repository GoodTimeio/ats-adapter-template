import { Module } from '@nestjs/common';
import { ExampleController } from '@api/example/example.controller';

@Module({
    controllers: [ExampleController],
})
export class ExampleModule {}
