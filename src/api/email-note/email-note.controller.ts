import { Body, Controller, Post, Query } from '@nestjs/common';
import { ReqHeader } from '@api/header.decorator';
import { BaseHeaderWithOnBehalfOfDTO } from '@api/headers.dto';
import { CreateEmailNoteDTO } from '@api/email-note/email-note.dto';
import { Response } from '@api/types';
import { IsString } from 'class-validator';

export class EmailNoteQuery {
    @IsString()
    candidateId!: string;
}

@Controller('email_notes')
export class EmailNoteController {
    @Post()
    async create(
        @Query() query: EmailNoteQuery,
        @ReqHeader(BaseHeaderWithOnBehalfOfDTO) headers: BaseHeaderWithOnBehalfOfDTO,
        @Body() body: CreateEmailNoteDTO
    ): Promise<Response<undefined>> {
        return {
            message: `Posted the Email Note on behalf of ${headers.onBehalfOf}`,
            data: undefined,
        };
    }
}
