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

        let errorBody: object = { error: 'unknown error occurred' };
        if (exception instanceof HttpException) {
            const exceptionResponse = exception.getResponse();
            if (typeof exceptionResponse !== 'string') {
                errorBody = exceptionResponse;
            } else {
                errorBody = { error: exceptionResponse };
            }
        }

        const status = exception instanceof HttpException ? exception.getStatus() : HttpStatus.INTERNAL_SERVER_ERROR;
        response.status(status).json({
            ...errorBody,
            statusCode: status,
            requestId: this.cls.getClsValue('requestId'),
        });
    }
}
