import { ExceptionFilter, Catch, ArgumentsHost, HttpException, HttpStatus } from '@nestjs/common';
import { ClsService } from './cls.service';

/**
 * Add a requestId field to every error response.
 */
@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
    constructor(private cls: ClsService) {}

    catch(exception: unknown, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const errorBody =
            exception instanceof HttpException ? exception.getResponse() : { error: 'unknown error occurred' };

        const status = exception instanceof HttpException ? exception.getStatus() : HttpStatus.INTERNAL_SERVER_ERROR;
        response.status(status).json({
            ...(typeof errorBody === 'string' ? { error: errorBody } : errorBody),
            statusCode: status,
            requestId: this.cls.getClsValue('requestId'),
        });
    }
}
