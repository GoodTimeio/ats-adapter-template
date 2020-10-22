import { Module } from '@nestjs/common';
import { ApplicationController } from '@api/application/application.controller';
import { CandidateController } from '@api/candidate/candidate.controller';
import { UserController } from '@api/user/user.controller';

@Module({
    controllers: [ApplicationController, CandidateController, UserController],
})
export class ApiModule {}
