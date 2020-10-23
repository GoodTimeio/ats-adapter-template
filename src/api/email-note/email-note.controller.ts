import { Body, Controller, Post } from '@nestjs/common';
import { ReqHeader } from '@api/header.decorator';
import { BaseHeaderWithOnBehalfOfDTO } from '@api/headers.dto';
import { CreateEmailNoteDTO } from '@api/email-note/email-note.dto';

@Controller('email_notes')
export class EmailNoteController {
    @Post()
    create(
        @ReqHeader(BaseHeaderWithOnBehalfOfDTO) headers: BaseHeaderWithOnBehalfOfDTO,
        @Body() body: CreateEmailNoteDTO
    ) {
        return {
            message: `Posted the Email Note on behalf of ${headers.onBehalfOf}`,
        };
    }
}
