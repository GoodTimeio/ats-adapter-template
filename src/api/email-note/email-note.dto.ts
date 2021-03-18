import { Type } from 'class-transformer';
import { IsString, IsOptional, ValidateNested, IsDefined, IsInstance } from 'class-validator';

class From {
    @IsString()
    email!: string;

    @IsOptional()
    @IsString()
    name?: string;
}

class Email {
    @IsString()
    to!: string;

    @IsDefined()
    @ValidateNested()
    @Type(() => From)
    @IsInstance(From)
    from!: From;

    @IsOptional()
    @IsString()
    cc?: string;

    @IsString()
    subject!: string;

    @IsString()
    text!: string;
}

export class CreateEmailNoteDTO {
    @IsDefined()
    @ValidateNested()
    @Type(() => Email)
    @IsInstance(Email)
    email!: Email;
}
