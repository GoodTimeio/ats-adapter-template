import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ClsService } from './cls.service';

/**
 * Add a requestId field to every succesful response.
 */
@Injectable()
export class ResponseFieldsInterceptor implements NestInterceptor {
    constructor(private cls: ClsService) {}

    intercept(context: ExecutionContext, next: CallHandler): Observable<unknown> {
        return next.handle().pipe(
            map((value) => {
                return {
                    ...value,
                    requestId: this.cls.getClsValue('requestId'),
                };
            })
        );
    }
}
