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
} from 'class-validator';

class Interviewer {
    @IsString()
    id!: string;

    @IsEmail()
    email!: string;

    @IsString()
    @IsIn(['accepted', 'declined', 'needs_action', 'tentative'])
    responseStatus!: 'accepted' | 'declined' | 'needs_action' | 'tentative';
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

class UpdateScheduledEventDTO extends CreateScheduledEventDTO {
    @IsString()
    id!: string;
}

export class UpdateScheduledPanelDTO extends CreateScheduledPanelDTO {
    @IsString()
    id!: string;

    @IsDefined()
    @ValidateNested()
    @Type(() => UpdateScheduledEventDTO)
    @IsInstance(Array)
    @ArrayMinSize(1)
    scheduledEvents!: UpdateScheduledEventDTO[];
}
