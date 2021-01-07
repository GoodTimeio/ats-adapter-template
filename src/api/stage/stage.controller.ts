import { BasePaginatedGetRequestQueryParamsDTO } from '@api/query-params.dto';
import { Controller, Get, Query } from '@nestjs/common';
import { IsString, IsOptional } from 'class-validator';
import { ReqHeader } from '@api/header.decorator';
import { BaseHeadersDTO } from '@api/headers.dto';
import { Stage } from 'src/entities/stage';
import { Response } from '@api/types';

class StagesPaginatedGetQueryParamsDTO extends BasePaginatedGetRequestQueryParamsDTO {
    @IsOptional()
    @IsString()
    jobId?: string;
}

@Controller('stages')
export class StageController {
    @Get()
    async findAll(
        @Query() query: StagesPaginatedGetQueryParamsDTO,
        @ReqHeader(BaseHeadersDTO) headers: BaseHeadersDTO
    ): Promise<Response<(Stage | unknown) /* replace with ATS's Stage rep. */[]>> {
        return {
            message: `Returning ${query.maxResults} Stages`,
            pagination: {
                next: 0,
                maxResults: query.maxResults,
            },
            data: [],
        };
    }
}
