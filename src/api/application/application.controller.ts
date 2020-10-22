import { BasePaginatedGetRequestQueryParamsDTO, BaseGetRequestQueryParamsDTO } from '@api/query-params.dto';
import { Controller, Get, Param, Query } from '@nestjs/common';
import { Transform } from 'class-transformer';
import { IsString, IsOptional, IsBoolean } from 'class-validator';
import { ReqHeader } from '@api/header.decorator';
import { BaseHeadersDTO } from '@api/headers.dto';

class ApplicationGetQueryParamsDTO extends BaseGetRequestQueryParamsDTO {
    @IsOptional()
    @IsString()
    candidateId?: string;

    @IsOptional()
    @Transform((value) => value === 'true')
    @IsBoolean()
    includeHiringMemberIds = false;
}

class ApplicationsPaginatedGetQueryParamsDTO extends BasePaginatedGetRequestQueryParamsDTO {
    @IsOptional()
    @IsString()
    candidateId?: string;

    @IsOptional()
    @Transform((value) => value === 'true')
    @IsBoolean()
    includeHiringMemberIds = false;
}

@Controller('applications')
export class ApplicationController {
    @Get(':applicationId')
    findOne(
        @Param('applicationId') applicationId: string,
        @Query() query: ApplicationGetQueryParamsDTO,
        @ReqHeader(BaseHeadersDTO) headers: BaseHeadersDTO
    ) {
        return {
            message: `Found an Application with id ${applicationId}`,
            data: {
                // of type Application
            },
        };
    }

    @Get()
    findAll(
        @Query() query: ApplicationsPaginatedGetQueryParamsDTO,
        @ReqHeader(BaseHeadersDTO) headers: BaseHeadersDTO
    ) {
        return {
            message: `Returning ${query.maxResults} Applications`,
            pagination: {
                next: query.next + '+',
                maxResults: query.maxResults,
            },
            data: [
                // of type Application[]
            ],
        };
    }
}
