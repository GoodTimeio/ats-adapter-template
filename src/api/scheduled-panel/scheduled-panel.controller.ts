import { BasePaginatedGetRequestQueryParamsDTO, BaseGetRequestQueryParamsDTO } from '@api/query-params.dto';
import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { IsString, IsOptional } from 'class-validator';
import { ReqHeader } from '@api/header.decorator';
import { BaseHeadersDTO, BaseHeaderWithOnBehalfOfDTO } from '@api/headers.dto';
import { CreateScheduledPanelDTO, UpdateDeleteScheduledPanelDTO } from '@api/scheduled-panel/scheduled-panel.dto';
import { Response } from '@api/types';
import { ScheduledPanel } from 'src/entities/scheduled-panel';

class ScheduledPanelsPaginatedGetQueryParamsDTO extends BasePaginatedGetRequestQueryParamsDTO {
    @IsOptional()
    @IsString()
    candidateId?: string;

    @IsString()
    applicationId!: string;
}

@Controller('scheduled_panels')
export class ScheduledPanelController {
    @Get(':scheduledPanelId')
    async findOne(
        @Param('scheduledPanelId') scheduledPanelId: string,
        @Query() query: BaseGetRequestQueryParamsDTO,
        @ReqHeader(BaseHeadersDTO) headers: BaseHeadersDTO
    ): Promise<Response<ScheduledPanel | unknown /* TODO replace with ATS's ScheduledPanel rep. */>> {
        return {
            message: `Found a ScheduledPanel with id ${scheduledPanelId}`,
            data: {},
        };
    }

    @Get()
    async findAll(
        @Query() query: ScheduledPanelsPaginatedGetQueryParamsDTO,
        @ReqHeader(BaseHeadersDTO) headers: BaseHeadersDTO
    ): Promise<Response<(ScheduledPanel | unknown) /* TODO replace with ATS's ScheduledPanel rep. */[]>> {
        return {
            message: `Returning ${query.maxResults} ScheduledPanels`,
            pagination: {
                next: 0,
                maxResults: query.maxResults,
            },
            data: [],
        };
    }

    @Delete(':scheduledPanelId')
    async delete(
        @Param('scheduledPanelId') scheduledPanelId: string,
        @Body() body: UpdateDeleteScheduledPanelDTO,
        @ReqHeader(BaseHeaderWithOnBehalfOfDTO) headers: BaseHeaderWithOnBehalfOfDTO
    ): Promise<Response<undefined>> {
        return {
            message: `Deleting a ScheduledPanel with id ${scheduledPanelId}`,
            data: undefined,
        };
    }

    @Post()
    async create(
        @Body() body: CreateScheduledPanelDTO,
        @ReqHeader(BaseHeaderWithOnBehalfOfDTO) headers: BaseHeaderWithOnBehalfOfDTO
    ): Promise<Response<ScheduledPanel | unknown /* TODO replace with ATS's ScheduledPanel rep. */>> {
        return {
            message: `Creating a ScheduledPanel`,
            data: {},
        };
    }

    @Put(':scheduledPanelId')
    async update(
        @Param('scheduledPanelId') scheduledPanelId: string,
        @Body() body: UpdateDeleteScheduledPanelDTO,
        @ReqHeader(BaseHeaderWithOnBehalfOfDTO) headers: BaseHeaderWithOnBehalfOfDTO
    ): Promise<Response<ScheduledPanel | unknown /* TODO replace with ATS's ScheduledPanel rep. */>> {
        return {
            message: `Updating a ScheduledPanel with id ${scheduledPanelId}`,
            data: {},
        };
    }
}
