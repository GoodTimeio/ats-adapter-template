import { Module } from '@nestjs/common';
import { ApplicationController } from '@api/application/application.controller';
import { CandidateController } from '@api/candidate/candidate.controller';
import { EmailNoteController } from '@api/email-note/email-note.controller';
import { InterviewStepController } from '@api/interview-step/interview-step.controller';
import { JobController } from './job/job.controller';
import { ScheduledPanelController } from './scheduled-panel/scheduled-panel.controller';
import { StageController } from './stage/stage.controller';
import { UserController } from '@api/user/user.controller';
import { CoreModule } from 'src/core/core.module';

@Module({
    imports: [CoreModule],
    controllers: [
        ApplicationController,
        CandidateController,
        EmailNoteController,
        InterviewStepController,
        JobController,
        ScheduledPanelController,
        StageController,
        UserController,
    ],
})
export class ApiModule {}
