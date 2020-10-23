import { Module } from '@nestjs/common';
import { ApplicationController } from '@api/application/application.controller';
import { CandidateController } from '@api/candidate/candidate.controller';
import { UserController } from '@api/user/user.controller';
import { InterviewStepController } from '@api/interview-step/interview-step.controller';
import { StageController } from './stages/stage.controller';

@Module({
    controllers: [ApplicationController, CandidateController, InterviewStepController, StageController, UserController],
})
export class ApiModule {}
