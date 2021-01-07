import { BasePaginatedGetRequestQueryParamsDTO, BaseGetRequestQueryParamsDTO } from '@api/query-params.dto';
import { Controller, Get, Param, Query } from '@nestjs/common';
import { ReqHeader } from '@api/header.decorator';
import { BaseHeadersDTO } from '@api/headers.dto';
import { Job } from 'src/entities/job';
import { Response } from '@api/types';

@Controller('jobs')
export class JobController {
    @Get(':jobId')
    async findOne(
        @Param('jobId') jobId: string,
        @Query() query: BaseGetRequestQueryParamsDTO,
        @ReqHeader(BaseHeadersDTO) headers: BaseHeadersDTO
    ): Promise<Response<Job | unknown /* TODO: replace with ATS's Job rep. */>> {
        return {
            message: `Found an Job with id ${jobId}`,
            data: {},
        };
    }

    @Get()
    async findAll(
        @Query() query: BasePaginatedGetRequestQueryParamsDTO,
        @ReqHeader(BaseHeadersDTO) headers: BaseHeadersDTO
    ): Promise<Response<(Job | unknown) /* TODO: replace with ATS's Job rep. */[]>> {
        return {
            message: `Returning ${query.maxResults} Jobs`,
            pagination: {
                next: 0,
                maxResults: query.maxResults,
            },
            data: [],
        };
    }
}
