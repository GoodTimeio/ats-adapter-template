import { BasePaginatedGetRequestQueryParamsDTO } from '@api/query-params.dto';
import { Controller, Get, Query } from '@nestjs/common';
import { IsString, IsOptional } from 'class-validator';
import { ReqHeader } from '@api/header.decorator';
import { BaseHeadersDTO } from '@api/headers.dto';

class StagesPaginatedGetQueryParamsDTO extends BasePaginatedGetRequestQueryParamsDTO {
    @IsOptional()
    @IsString()
    jobId?: string;
}

@Controller('stages')
export class StageController {
    @Get()
    findAll(@Query() query: StagesPaginatedGetQueryParamsDTO, @ReqHeader(BaseHeadersDTO) headers: BaseHeadersDTO) {
        return {
            message: `Returning ${query.maxResults} Stages`,
            pagination: {
                next: query.next + '+',
                maxResults: query.maxResults,
            },
            data: [
                // of type Stage[]
            ],
        };
    }
}
