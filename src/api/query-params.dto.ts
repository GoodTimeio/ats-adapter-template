import { IsNumber, IsString, IsOptional, Min, IsBoolean, IsDate } from 'class-validator';
import { Transform } from 'class-transformer';

/**
 * Query Params that all GET requests can have.
 * For example: `GET applications/123123` can provide these query params.
 *
 * Check API docs for detail: https://goodtime-ats-adapter.docs.stoplight.io/api-reference
 */
export class BaseGetRequestQueryParamsDTO {
    @IsOptional()
    @Transform((value) => value === 'true')
    @IsBoolean()
    rawResponse = false;
}

/**
 * Query Params that all GET requests that do a paginated fetch can have.
 * For example: `GET application` can provide these query params.
 * Note that it doesn't make sense for `GET applications/123123` to provide these query params.
 *
 * Check API Docs for detail: https://goodtime-ats-adapter.docs.stoplight.io/api-reference
 */
export class BasePaginatedGetRequestQueryParamsDTO extends BaseGetRequestQueryParamsDTO {
    @IsOptional()
    @Transform((value) => new Date(value))
    @IsDate()
    since?: Date;

    @IsOptional()
    @Transform(parseInt)
    @Min(0)
    @IsNumber()
    maxResults = 200;

    // Feel free to update types & constraints to w/e works for your ATS Adapter.
    // Must be optional tho as the first call to a paginated resource
    // will not have the `next` field set.
    @IsOptional()
    @IsString()
    next?: string;
}
