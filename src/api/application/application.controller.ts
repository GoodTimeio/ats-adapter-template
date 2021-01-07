import { BasePaginatedGetRequestQueryParamsDTO, BaseGetRequestQueryParamsDTO } from '@api/query-params.dto';
import { Controller, Get, Param, Query } from '@nestjs/common';
import { Transform } from 'class-transformer';
import { IsString, IsOptional, IsBoolean } from 'class-validator';
import { ReqHeader } from '@api/header.decorator';
import { BaseHeadersDTO } from '@api/headers.dto';
import { Logger } from 'src/core/logger.service';
import { Response } from '@api/types';
import { Application } from 'src/entities/application';

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
    constructor(private logger: Logger) {}

    @Get(':applicationId')
    async findOne(
        @Param('applicationId') applicationId: string,
        @Query() query: ApplicationGetQueryParamsDTO,
        @ReqHeader(BaseHeadersDTO) headers: BaseHeadersDTO
    ): Promise<Response<Application | unknown /* TODO: replace with ATS's Application rep. */>> {
        this.logger.log('an example log');
        this.logger.warn('an example log');
        this.logger.debug('an example log');
        this.logger.error('an example log');
        return {
            message: `Found an Application with id ${applicationId}`,
            data: {},
        };
    }

    @Get()
    async findAll(
        @Query() query: ApplicationsPaginatedGetQueryParamsDTO,
        @ReqHeader(BaseHeadersDTO) headers: BaseHeadersDTO
    ): Promise<Response<(Application | unknown) /* TODO: replace with ATS's Application rep. */[]>> {
        return {
            message: `Returning ${query.maxResults} Applications`,
            pagination: {
                next: 0,
                maxResults: query.maxResults,
            },
            data: [],
        };
    }
}
