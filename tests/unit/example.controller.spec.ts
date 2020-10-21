import { Test, TestingModule } from '@nestjs/testing';
import { ExampleController } from '@api/example/example.controller';

describe('Example Controller', () => {
    let controller: ExampleController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [ExampleController],
        }).compile();

        controller = module.get<ExampleController>(ExampleController);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
