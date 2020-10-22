import { BasePaginatedGetRequestQueryParamsDTO, BaseGetRequestQueryParamsDTO } from '@api/query-params.dto';
import { BadRequestException, Controller, Get, Param, Query } from '@nestjs/common';
import { Transform } from 'class-transformer';
import { IsString, IsOptional, IsBoolean } from 'class-validator';
import { ReqHeader } from '@api/header.decorator';
import { BaseHeadersDTO } from '@api/headers.dto';

/**
 * See: https://goodtime-ats-adapter.docs.stoplight.io/api-reference/reference/applications-applicationid/getapplicationsapplicationid
 */
class ApplicationGetQueryParamsDTO extends BaseGetRequestQueryParamsDTO {
    @IsOptional()
    @IsString()
    candidateId?: string;

    @IsOptional()
    @Transform((value) => value === 'true')
    @IsBoolean()
    includeHiringMemberIds = false;
}

/**
 * See: https://goodtime-ats-adapter.docs.stoplight.io/api-reference/reference/applications/getapplications
 */
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
        // TODO: return a requestId in response
        // TODO: maybe create a service & have it return fake data
        return {
            message: `Found an Application with id ${applicationId}`,
            data: {},
        };
    }

    @Get()
    findAll(
        @Query() query: ApplicationsPaginatedGetQueryParamsDTO,
        @ReqHeader(BaseHeadersDTO) headers: BaseHeadersDTO
    ) {
        // throw new BadRequestException('world');
        return {
            message: `Returning ${query.maxResults} Applications`,
            pagination: {
                next: query.next + '+',
                maxResults: query.maxResults,
            },
            data: [],
        };
    }
}
