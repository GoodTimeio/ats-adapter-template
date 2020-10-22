import { BasePaginatedGetRequestQueryParamsDTO, BaseGetRequestQueryParamsDTO } from '@api/query-params.dto';
import { Controller, Get, Param, Query } from '@nestjs/common';
import { Transform } from 'class-transformer';
import { IsString, IsOptional, IsBoolean } from 'class-validator';
import { ReqHeader } from '@api/header.decorator';
import { BaseHeadersDTO } from '@api/headers.dto';

class CandidateGetQueryParamsDTO extends BaseGetRequestQueryParamsDTO {
    @IsOptional()
    @Transform((value) => value === 'true')
    @IsBoolean()
    includeResume = false;
}

class CandidatesPaginatedGetQueryParamsDTO extends BasePaginatedGetRequestQueryParamsDTO {
    @IsOptional()
    @IsString()
    email?: string;

    @IsOptional()
    @IsString()
    jobId?: string;

    @IsOptional()
    @IsString()
    stageId?: string;

    @IsOptional()
    @Transform((value) => value === 'true')
    @IsBoolean()
    includeResume = false;
}

@Controller('candidates')
export class CandidateController {
    @Get(':candidateId')
    findOne(
        @Param('candidateId') candidateId: string,
        @Query() query: CandidateGetQueryParamsDTO,
        @ReqHeader(BaseHeadersDTO) headers: BaseHeadersDTO
    ) {
        return {
            message: `Found an Candidate with id ${candidateId}`,
            data: {
                // of type Candidate
            },
        };
    }

    @Get()
    findAll(@Query() query: CandidatesPaginatedGetQueryParamsDTO, @ReqHeader(BaseHeadersDTO) headers: BaseHeadersDTO) {
        return {
            message: `Returning ${query.maxResults} Candidates`,
            pagination: {
                next: query.next + '+',
                maxResults: query.maxResults,
            },
            data: [
                // of type Candidate[]
            ],
        };
    }
}
