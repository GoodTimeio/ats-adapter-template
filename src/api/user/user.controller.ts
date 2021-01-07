import { BasePaginatedGetRequestQueryParamsDTO, BaseGetRequestQueryParamsDTO } from '@api/query-params.dto';
import { Controller, Get, Param, Query } from '@nestjs/common';
import { IsString, IsOptional } from 'class-validator';
import { ReqHeader } from '@api/header.decorator';
import { BaseHeadersDTO } from '@api/headers.dto';
import { Response } from '@api/types';
import { User } from 'src/entities/user';

class UsersPaginatedGetQueryParamsDTO extends BasePaginatedGetRequestQueryParamsDTO {
    @IsOptional()
    @IsString()
    email?: string;
}

@Controller('users')
export class UserController {
    @Get(':userId')
    async findOne(
        @Param('userId') userId: string,
        @Query() query: BaseGetRequestQueryParamsDTO,
        @ReqHeader(BaseHeadersDTO) headers: BaseHeadersDTO
    ): Promise<Response<User | unknown /* TODO: Replace w/ ATS's specific User rep */>> {
        return {
            message: `Found a User with id ${userId}`,
            data: {
                // of type User
            },
        };
    }

    @Get()
    async findAll(
        @Query() query: UsersPaginatedGetQueryParamsDTO,
        @ReqHeader(BaseHeadersDTO) headers: BaseHeadersDTO
    ): Promise<Response<(User | unknown) /* TODO: Replace w/ ATS's specific User rep */[]>> {
        return {
            message: `Returning ${query.maxResults} Users`,
            pagination: {
                next: 0,
                maxResults: query.maxResults,
            },
            data: [
                // of type User[]
            ],
        };
    }
}
