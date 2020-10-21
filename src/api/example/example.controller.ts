import { Controller, Get } from '@nestjs/common';

@Controller('')
export class ExampleController {
    @Get('')
    root() {
        return {
            data: 'hello world',
        };
    }
}
