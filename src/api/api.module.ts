import { Module } from '@nestjs/common';
import { ApplicationController } from '@api/application/application.controller';
import { CandidateController } from '@api/candidate/candidate.controller';
import { EmailNoteController } from '@api/email-note/email-note.controller';
import { InterviewStepController } from '@api/interview-step/interview-step.controller';
import { JobController } from './job/job.controller';
import { StageController } from './stage/stage.controller';
import { UserController } from '@api/user/user.controller';

@Module({
    controllers: [
        ApplicationController,
        CandidateController,
        EmailNoteController,
        InterviewStepController,
        JobController,
        StageController,
        UserController,
    ],
})
export class ApiModule {}
