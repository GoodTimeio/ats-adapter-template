import { BadRequestException, createParamDecorator, ExecutionContext } from '@nestjs/common';
import { validate } from 'class-validator';
import { plainToClass } from 'class-transformer';
import { ClassType } from 'class-transformer/ClassTransformer';

/**
 * A custom nestjs decorator to parse & validate request headers.
 *
 * Nestjs provides two decorators for headers.
 * * `Header` decorator that lets us set a header in the response
 * * `Headers` decorator that lets us get a specific header from the request
 *
 * This `ReqHeader` decorator is an alternative to `Headers`. While `Headers` only lets you
 * validate one request header, `ReqHeader` lets you define a DTO containing a subset of headers
 * and validate them all in one go.
 *
 * This has the benefit that the header DTO can be shared across requests. If we need to update the
 * validation logic on a specific header, we can just update the header DTO and have the change take
 * place across all our routes.
 *
 * TODO: Observe that the `@Query() query: Query` decorator is able to infer the `targetClass` as `Query`
 * probably by using TS/JS refelction. We should look into making `ReqHeader` do the same so we can avoid:
 * `@ReqHeader(HeaderDTO) header: HeaderDTO`, where we specify `HeaderDTO` twice.
 *
 * References:
 * See: https://docs.nestjs.com/custom-decorators
 * See: https://docs.nestjs.com/pipes#class-validator
 * See: https://github.com/nestjs/nest/issues/356#issuecomment-357698382
 * See: https://github.com/nestjs/nest/issues/4798#issuecomment-706176390
 */
export const ReqHeader = createParamDecorator(async <T>(targetClass: ClassType<T>, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    const object = plainToClass(targetClass, request.headers, { excludeExtraneousValues: true });
    const errors = await validate(object);
    if (errors.length > 0) {
        throw new BadRequestException(errors);
    }
    return object;
});
