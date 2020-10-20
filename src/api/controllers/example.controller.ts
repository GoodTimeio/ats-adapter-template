import { Controller, Get, HttpStatus, Res } from '@nestjs/common';
import { Response } from 'express';

@Controller('')
export class ExampleController {
    @Get('')
    root(@Res() res: Response) {
        return res.status(HttpStatus.OK).json({
            data: 'hello world',
        });
    }
}
