import { BasePaginatedGetRequestQueryParamsDTO } from '@api/query-params.dto';
import { Controller, Get, Query } from '@nestjs/common';
import { IsString, IsOptional } from 'class-validator';
import { ReqHeader } from '@api/header.decorator';
import { BaseHeadersDTO } from '@api/headers.dto';
import { InterviewStep } from 'src/entities/interview-step';
import { Response } from '@api/types';

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
    async findAll(
        @Query() query: InterviewStepsPaginatedGetQueryParamsDTO,
        @ReqHeader(BaseHeadersDTO) headers: BaseHeadersDTO
    ): Promise<Response<(InterviewStep | unknown) /* TODO: replace with ATS's InterviewStep rep. */[]>> {
        return {
            message: `Returning ${query.maxResults} InterviewSteps`,
            pagination: {
                next: 0,
                maxResults: query.maxResults,
            },
            data: [],
        };
    }
}
