import { BasePaginatedGetRequestQueryParamsDTO, BaseGetRequestQueryParamsDTO } from '@api/query-params.dto';
import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { IsString, IsOptional } from 'class-validator';
import { ReqHeader } from '@api/header.decorator';
import { BaseHeadersDTO, BaseHeaderWithOnBehalfOfDTO } from '@api/headers.dto';
import { CreateScheduledPanelDTO, UpdateScheduledPanelDTO } from '@api/scheduled-panel/scheduled-panel.dto';

class ScheduledPanelGetQueryParamsDTO extends BaseGetRequestQueryParamsDTO {
    @IsOptional()
    @IsString()
    candidateId?: string;

    @IsOptional()
    @IsString()
    applicationId?: string;
}

class ScheduledPanelsPaginatedGetQueryParamsDTO extends BasePaginatedGetRequestQueryParamsDTO {
    @IsOptional()
    @IsString()
    candidateId?: string;

    @IsOptional()
    @IsString()
    applicationId?: string;
}

@Controller('scheduled_panels')
export class ScheduledPanelController {
    @Get(':scheduledPanelId')
    findOne(
        @Param('scheduledPanelId') scheduledPanelId: string,
        @Query() query: ScheduledPanelGetQueryParamsDTO,
        @ReqHeader(BaseHeadersDTO) headers: BaseHeadersDTO
    ) {
        return {
            message: `Found a ScheduledPanel with id ${scheduledPanelId}`,
            data: {
                // of type ScheduledPanel
            },
        };
    }

    @Get()
    findAll(
        @Query() query: ScheduledPanelsPaginatedGetQueryParamsDTO,
        @ReqHeader(BaseHeadersDTO) headers: BaseHeadersDTO
    ) {
        return {
            message: `Returning ${query.maxResults} ScheduledPanels`,
            pagination: {
                next: query.next + '+',
                maxResults: query.maxResults,
            },
            data: [
                // of type ScheduledPanel[]
            ],
        };
    }

    @Delete(':scheduledPanelId')
    delete(
        @Param('scheduledPanelId') scheduledPanelId: string,
        @Query() query: ScheduledPanelGetQueryParamsDTO,
        @ReqHeader(BaseHeaderWithOnBehalfOfDTO) headers: BaseHeaderWithOnBehalfOfDTO
    ) {
        return {
            message: `Deleting a ScheduledPanel with id ${scheduledPanelId}`,
            data: {
                // of type ScheduledPanel
            },
        };
    }

    @Post()
    create(
        @Body() query: CreateScheduledPanelDTO,
        @ReqHeader(BaseHeaderWithOnBehalfOfDTO) headers: BaseHeaderWithOnBehalfOfDTO
    ) {
        return {
            message: `Creating a ScheduledPanel`,
            data: {
                // of type ScheduledPanel
            },
        };
    }

    @Put(':scheduledPanelId')
    update(
        @Param('scheduledPanelId') scheduledPanelId: string,
        @Body() query: UpdateScheduledPanelDTO,
        @ReqHeader(BaseHeaderWithOnBehalfOfDTO) headers: BaseHeaderWithOnBehalfOfDTO
    ) {
        return {
            message: `Updating a ScheduledPanel with id ${scheduledPanelId}`,
            data: {
                // of type ScheduledPanel
            },
        };
    }
}
