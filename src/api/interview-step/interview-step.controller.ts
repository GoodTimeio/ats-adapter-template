import { BasePaginatedGetRequestQueryParamsDTO } from '@api/query-params.dto';
import { Controller, Get, Query } from '@nestjs/common';
import { IsString, IsOptional } from 'class-validator';
import { ReqHeader } from '@api/header.decorator';
import { BaseHeadersDTO } from '@api/headers.dto';

class InterviewStepsPaginatedGetQueryParamsDTO extends BasePaginatedGetRequestQueryParamsDTO {
    @IsOptional()
    @IsString()
    stageId?: string;

    @IsOptional()
    @IsString()
    jobId?: string;
}

@Controller('interview_steps')
export class InterviewStepController {
    @Get()
    findAll(
        @Query() query: InterviewStepsPaginatedGetQueryParamsDTO,
        @ReqHeader(BaseHeadersDTO) headers: BaseHeadersDTO
    ) {
        return {
            message: `Returning ${query.maxResults} InterviewSteps`,
            pagination: {
                next: query.next + '+',
                maxResults: query.maxResults,
            },
            data: [
                // of type InterviewStep[]
            ],
        };
    }
}
