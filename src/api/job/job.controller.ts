import { BasePaginatedGetRequestQueryParamsDTO, BaseGetRequestQueryParamsDTO } from '@api/query-params.dto';
import { Controller, Get, Param, Query } from '@nestjs/common';
import { ReqHeader } from '@api/header.decorator';
import { BaseHeadersDTO } from '@api/headers.dto';

@Controller('jobs')
export class JobController {
    @Get(':jobId')
    findOne(
        @Param('jobId') jobId: string,
        @Query() query: BaseGetRequestQueryParamsDTO,
        @ReqHeader(BaseHeadersDTO) headers: BaseHeadersDTO
    ) {
        return {
            message: `Found an Job with id ${jobId}`,
            data: {
                // of type Job
            },
        };
    }

    @Get()
    findAll(@Query() query: BasePaginatedGetRequestQueryParamsDTO, @ReqHeader(BaseHeadersDTO) headers: BaseHeadersDTO) {
        return {
            message: `Returning ${query.maxResults} Jobs`,
            pagination: {
                next: query.next + '+',
                maxResults: query.maxResults,
            },
            data: [
                // of type Job[]
            ],
        };
    }
}
