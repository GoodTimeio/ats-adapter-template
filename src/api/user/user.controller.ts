import { BasePaginatedGetRequestQueryParamsDTO, BaseGetRequestQueryParamsDTO } from '@api/query-params.dto';
import { Controller, Get, Param, Query } from '@nestjs/common';
import { IsString, IsOptional } from 'class-validator';
import { ReqHeader } from '@api/header.decorator';
import { BaseHeadersDTO } from '@api/headers.dto';

class UsersPaginatedGetQueryParamsDTO extends BasePaginatedGetRequestQueryParamsDTO {
    @IsOptional()
    @IsString()
    email?: string;
}

@Controller('users')
export class UserController {
    @Get(':userId')
    findOne(
        @Param('userId') userId: string,
        @Query() query: BaseGetRequestQueryParamsDTO,
        @ReqHeader(BaseHeadersDTO) headers: BaseHeadersDTO
    ) {
        return {
            message: `Found a User with id ${userId}`,
            data: {
                // of type User
            },
        };
    }

    @Get()
    findAll(@Query() query: UsersPaginatedGetQueryParamsDTO, @ReqHeader(BaseHeadersDTO) headers: BaseHeadersDTO) {
        return {
            message: `Returning ${query.maxResults} Users`,
            pagination: {
                next: query.next + '+',
                maxResults: query.maxResults,
            },
            data: [
                // of type User[]
            ],
        };
    }
}
