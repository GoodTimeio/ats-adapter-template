import { Type } from 'class-transformer';
import {
    IsString,
    IsOptional,
    ValidateNested,
    IsDefined,
    IsInstance,
    IsDateString,
    IsIn,
    ArrayMinSize,
    IsEmail,
    Validate,
} from 'class-validator';
import { ExtrasValidator } from './extras-validator';

class Interviewer {
    @IsString()
    id!: string;

    @IsEmail()
    email!: string;

    @IsString()
    @IsIn(['accepted', 'declined', 'needsAction', 'tentative'])
    responseStatus!: 'accepted' | 'declined' | 'needsAction' | 'tentative';
}

class CreateScheduledEventDTO {
    @IsString()
    title!: string;

    @IsDateString()
    startTime!: string;

    @IsDateString()
    endTime!: string;

    @IsOptional()
    @IsString()
    location?: string;

    @IsOptional()
    @IsString()
    interviewStepId?: string;

    @IsDefined()
    @ValidateNested()
    @Type(() => Interviewer)
    @IsInstance(Array)
    @ArrayMinSize(1)
    interviewers!: Interviewer[];

    @IsString()
    externalEventId!: string;
}

export class CreateScheduledPanelDTO {
    @IsString()
    applicationId!: string;

    @IsString()
    externalPanelId!: string;

    @IsString()
    stageId!: string;

    @IsString()
    jobId!: string;

    @IsString()
    title!: string;

    @IsString()
    candidateId!: string;

    @IsOptional()
    @IsString()
    externalUrl?: string;

    @IsDefined()
    @ValidateNested()
    @Type(() => CreateScheduledEventDTO)
    @IsInstance(Array)
    @ArrayMinSize(1)
    scheduledEvents!: CreateScheduledEventDTO[];
}

class UpdateDeleteScheduledEventDTO extends CreateScheduledEventDTO {
    @IsString()
    @IsOptional() // if creating a new ScheduledEvent, id won't be specified
    id?: string;
}

export class UpdateDeleteScheduledPanelDTO extends CreateScheduledPanelDTO {
    @IsString()
    id!: string;

    @IsDefined()
    @ValidateNested()
    @Type(() => UpdateDeleteScheduledEventDTO)
    @IsInstance(Array)
    @ArrayMinSize(0)
    scheduledEvents!: UpdateDeleteScheduledEventDTO[];

    @Validate(ExtrasValidator)
    extras: unknown;
}
